SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c

SSH_KEY := $(HOME)/.ssh/newtimi.pem
SSH_USER := admin
SSH_HOST := 18.138.33.235
SSH_OPTS := -i $(SSH_KEY)
SSH_TARGET := $(SSH_USER)@$(SSH_HOST)

REMOTE_STAGING_DIR := $$HOME/development/im-infra/staging
REMOTE_APP_DIR := $(REMOTE_STAGING_DIR)/components/caddy/www/akachat

.PHONY: build sync restart-caddy deploy

build:
	pnpm build

sync:
	ssh $(SSH_OPTS) $(SSH_TARGET) 'sudo mkdir -p "$(REMOTE_APP_DIR)" && sudo find "$(REMOTE_APP_DIR)" -mindepth 1 -maxdepth 1 -exec rm -rf {} + && sudo chown -R $$USER:$$USER "$(REMOTE_APP_DIR)"'
	COPYFILE_DISABLE=1 tar -C out -cf - . | ssh $(SSH_OPTS) $(SSH_TARGET) 'tar -C "$(REMOTE_APP_DIR)" -xf -'

restart-caddy:
	ssh $(SSH_OPTS) $(SSH_TARGET) 'cd "$(REMOTE_STAGING_DIR)" && sudo docker compose restart caddy'

deploy: build sync restart-caddy
