import DeepLinkRedirect from './DeepLinkRedirect';

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Open in Trait',
    description: 'Download Trait to open this link',
  };
}

export default function AppDeepLinkPage() {
  return <DeepLinkRedirect />;
}

// Generate static paths for common deep link patterns
export function generateStaticParams() {
  // Pre-generate common deep link base paths
  // Caddy will serve these for any sub-paths (e.g., /open/contact/user123 -> /open/contact/index.html)
  const basePaths = [
    'fallback',
    'contact',
    'conversation',
    'chat',
    'invite',
    'channel',
    'group',
    'user',
    'profile',
    'message',
    'welcome',
  ];

  return basePaths.map((path) => ({ slug: [path] }));
}
