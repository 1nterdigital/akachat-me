import { Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getMessages, type Locale } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/language-switcher';

interface HomePageProps {
  readonly params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <div className='flex items-center'>
              <Link href={`/${locale}`} className='text-2xl font-bold text-blue-600'>
                <Image src='/logo.svg' alt='AkaChat Logo' width={100} height={100} />
              </Link>
            </div>
            <nav className='hidden md:flex items-center space-x-8'>
              <Link href={`/${locale}/privacy`} className='text-gray-600 hover:text-gray-900'>
                {messages.nav.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className='text-gray-600 hover:text-gray-900'>
                {messages.nav.terms}
              </Link>
              <LanguageSwitcher currentLocale={locale} />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                {messages.hero.title}
                <span className='text-blue-600'> {messages.hero.titleHighlight}</span>{' '}
                {messages.hero.titleEnd}
              </h1>
              <p className='text-xl text-gray-600 mb-8'>{messages.hero.subtitle}</p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <a
                  title={messages.hero.appStoreAlt}
                  href='https://apps.apple.com/app/akachat/id6746837080'
                  className='text-white transition-transform hover:scale-105 flex items-center justify-center'>
                  <Image
                    src='/app-store.png'
                    alt={messages.hero.appStoreAlt}
                    width={150}
                    height={44}
                    className='h-11'
                  />
                </a>
                <a
                  title={messages.hero.playStoreAlt}
                  href='https://play.google.com/store/apps/details?id=com.akachat'
                  className='text-white transition-transform hover:scale-105 flex items-center justify-center'>
                  <Image
                    src='/play-store.png'
                    alt={messages.hero.playStoreAlt}
                    width={150}
                    height={44}
                    className='h-11'
                  />
                </a>
                <a
                  title={messages.hero.downloadWebAlt}
                  href='https://docs.inter-digital.org/public.php/dav/files/WggRLtezEGpS9mj/?accept=zip'
                  download
                  className='bg-slate-950  text-white rounded-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 font-medium shadow-md h-11'
                  style={{ width: 150, minWidth: 150 }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    height='24'
                    width='24'
                    version='1.1'
                    id='Layer_1'
                    viewBox='0 0 512.002 512.002'
                    xmlSpace='preserve'>
                    <g>
                      <path
                        fill='#A6D864'
                        d='M309.446,512c17.119,0,32.048-14.929,32.048-32.048v-74.846h21.399   c12.841,0,21.399-8.561,21.399-21.399v-213.77H127.708v213.772c0,12.839,8.56,21.399,21.399,21.399h21.401v74.846   c0,17.119,14.925,32.048,32.048,32.048c17.117,0,32.045-14.929,32.045-32.048v-74.846H277.4v74.846   C277.398,497.071,292.327,512,309.446,512z'
                      />
                      <path
                        fill='#A6D864'
                        d='M437.74,383.709c17.119,0,32.045-14.927,32.045-32.048v-149.69   c0-17.029-14.925-32.034-32.045-32.034c-17.121,0-32.048,15.006-32.048,32.034v149.69   C405.692,368.78,420.618,383.709,437.74,383.709z'
                      />
                      <path
                        fill='#A6D864'
                        d='M74.261,383.709c17.121,0,32.048-14.927,32.048-32.048v-149.69   c0-17.029-14.925-32.034-32.048-32.034c-17.119,0-32.045,15.006-32.045,32.034v149.69C42.217,368.78,57.142,383.709,74.261,383.709   z'
                      />
                      <path
                        fill='#A6D864'
                        d='M358.611,3.229c-4.278-4.305-10.647-4.305-14.925,0l-28.701,28.605l-1.324,1.322   c-17.018-8.522-36.099-12.778-57.347-12.819c-0.104,0-0.207-0.003-0.311-0.003h-0.003c-0.108,0-0.207,0.003-0.314,0.003   c-21.247,0.041-40.327,4.297-57.344,12.819l-1.327-1.322L168.314,3.229c-4.281-4.305-10.647-4.305-14.925,0   c-4.281,4.281-4.281,10.635,0,14.913l27.763,27.768c-8.946,5.973-17.058,13.282-24.112,21.642   c-16.888,20.018-27.661,46.071-29.142,74.299c-0.014,0.294-0.043,0.584-0.056,0.878c-0.091,1.922-0.133,3.854-0.133,5.794h256.583   c0-1.939-0.046-3.871-0.133-5.794c-0.014-0.294-0.043-0.584-0.06-0.878c-1.478-28.228-12.253-54.282-29.142-74.297   c-7.051-8.36-15.166-15.669-24.112-21.642l27.766-27.768C362.893,13.864,362.893,7.511,358.611,3.229z M202.515,111.16   c-8.853,0-16.031-7.177-16.031-16.031s7.177-16.031,16.031-16.031c8.853,0,16.031,7.177,16.031,16.031   S211.368,111.16,202.515,111.16z M309.485,111.16c-8.853,0-16.031-7.177-16.031-16.031s7.177-16.031,16.031-16.031   c8.853,0,16.031,7.177,16.031,16.031S318.339,111.16,309.485,111.16z'
                      />
                    </g>
                  </svg>
                  <span className='whitespace-nowrap text-sm'>{messages.hero.downloadWebText}</span>
                </a>
              </div>
              <p className='text-sm text-gray-500 mt-4'>{messages.hero.disclaimer}</p>
            </div>

            <div className='relative'>
              <div className='animate-float'>
                <Image
                  src='/hero.png'
                  alt='Team collaboration illustration'
                  className='w-full h-auto rounded-2xl shadow-2xl'
                  width={500}
                  height={500}
                />
              </div>
              {/* Floating elements */}
              <div className='absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce-slow'>
                <Users className='h-6 w-6 text-blue-600' />
              </div>
              <div className='absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-pulse'>
                <Zap className='h-6 w-6 text-green-500' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#3D71DE] mb-4'>
              {messages.benefits.title}
            </h2>
            <p className='text-xl text-gray-600'>{messages.benefits.subtitle}</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/ClockCountdown.svg?height=64&width=64'
                  alt='Real-time messaging illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {messages.benefits.realTimeMessaging.title}
              </h3>
              <p className='text-gray-600'>{messages.benefits.realTimeMessaging.description}</p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/SealCheck.svg?height=64&width=64'
                  alt='Simple focused messaging illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {messages.benefits.simpleFocused.title}
              </h3>
              <p className='text-gray-600'>{messages.benefits.simpleFocused.description}</p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/Kanban.svg?height=64&width=64'
                  alt='Team channels illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {messages.benefits.organizedChannels.title}
              </h3>
              <p className='text-gray-600'>{messages.benefits.organizedChannels.description}</p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/Wall.svg?height=64&width=64'
                  alt='Security shield illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {messages.benefits.enterpriseSecurity.title}
              </h3>
              <p className='text-gray-600'>{messages.benefits.enterpriseSecurity.description}</p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/UsersThree.svg?height=64&width=64'
                  alt='All teams working together illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {messages.benefits.allTeams.title}
              </h3>
              <p className='text-gray-600'>{messages.benefits.allTeams.description}</p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/Headset.svg?height=64&width=64'
                  alt='24/7 support illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {messages.benefits.support.title}
              </h3>
              <p className='text-gray-600'>{messages.benefits.support.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-blue-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>{messages.cta.title}</h2>
          <p className='text-lg font-normal text-blue-100 mb-8'>{messages.cta.subtitle}</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-4'>
            <a
              title={messages.hero.appStoreAlt}
              href='https://apps.apple.com/app/akachat/id6746837080'
              className='transition-transform hover:scale-105 flex items-center justify-center'>
              <Image
                src='/app-store.png'
                alt={messages.hero.appStoreAlt}
                width={150}
                height={44}
                className='h-12'
              />
            </a>
            <a
              title={messages.hero.playStoreAlt}
              href='https://play.google.com/store/apps/details?id=com.akachat'
              className='transition-transform hover:scale-105 flex items-center justify-center'>
              <Image
                src='/play-store.png'
                alt={messages.hero.playStoreAlt}
                width={150}
                height={44}
                className='h-12'
              />
            </a>
            <a
              title={messages.hero.downloadWebAlt}
              href='https://docs.inter-digital.org/public.php/dav/files/WggRLtezEGpS9mj/?accept=zip'
              download
              className='bg-slate-950 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 font-medium shadow-md h-12 text-sm sm:text-base'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                height='24'
                width='24'
                version='1.1'
                id='Layer_1'
                viewBox='0 0 512.002 512.002'
                xmlSpace='preserve'>
                <g>
                  <path
                    fill='#A6D864'
                    d='M309.446,512c17.119,0,32.048-14.929,32.048-32.048v-74.846h21.399   c12.841,0,21.399-8.561,21.399-21.399v-213.77H127.708v213.772c0,12.839,8.56,21.399,21.399,21.399h21.401v74.846   c0,17.119,14.925,32.048,32.048,32.048c17.117,0,32.045-14.929,32.045-32.048v-74.846H277.4v74.846   C277.398,497.071,292.327,512,309.446,512z'
                  />
                  <path
                    fill='#A6D864'
                    d='M437.74,383.709c17.119,0,32.045-14.927,32.045-32.048v-149.69   c0-17.029-14.925-32.034-32.045-32.034c-17.121,0-32.048,15.006-32.048,32.034v149.69   C405.692,368.78,420.618,383.709,437.74,383.709z'
                  />
                  <path
                    fill='#A6D864'
                    d='M74.261,383.709c17.121,0,32.048-14.927,32.048-32.048v-149.69   c0-17.029-14.925-32.034-32.048-32.034c-17.119,0-32.045,15.006-32.045,32.034v149.69C42.217,368.78,57.142,383.709,74.261,383.709   z'
                  />
                  <path
                    fill='#A6D864'
                    d='M358.611,3.229c-4.278-4.305-10.647-4.305-14.925,0l-28.701,28.605l-1.324,1.322   c-17.018-8.522-36.099-12.778-57.347-12.819c-0.104,0-0.207-0.003-0.311-0.003h-0.003c-0.108,0-0.207,0.003-0.314,0.003   c-21.247,0.041-40.327,4.297-57.344,12.819l-1.327-1.322L168.314,3.229c-4.281-4.305-10.647-4.305-14.925,0   c-4.281,4.281-4.281,10.635,0,14.913l27.763,27.768c-8.946,5.973-17.058,13.282-24.112,21.642   c-16.888,20.018-27.661,46.071-29.142,74.299c-0.014,0.294-0.043,0.584-0.056,0.878c-0.091,1.922-0.133,3.854-0.133,5.794h256.583   c0-1.939-0.046-3.871-0.133-5.794c-0.014-0.294-0.043-0.584-0.06-0.878c-1.478-28.228-12.253-54.282-29.142-74.297   c-7.051-8.36-15.166-15.669-24.112-21.642l27.766-27.768C362.893,13.864,362.893,7.511,358.611,3.229z M202.515,111.16   c-8.853,0-16.031-7.177-16.031-16.031s7.177-16.031,16.031-16.031c8.853,0,16.031,7.177,16.031,16.031   S211.368,111.16,202.515,111.16z M309.485,111.16c-8.853,0-16.031-7.177-16.031-16.031s7.177-16.031,16.031-16.031   c8.853,0,16.031,7.177,16.031,16.031S318.339,111.16,309.485,111.16z'
                  />
                </g>
              </svg>
              <span className='whitespace-nowrap'>{messages.hero.downloadWebText}</span>
            </a>
          </div>
          <div className="justify-center text-blue-100 text-sm font-normal font-['Inter'] leading-tight">
            {messages.cta.disclaimer}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-neutral-800 h-80 relative'>
        <div className='max-w-[1280px] mx-auto px-8 pt-16 flex flex-col justify-start items-center gap-8'>
          <div className='max-w-[652px] flex flex-col justify-start items-center gap-3.5'>
            <div className='text-center text-neutral-100 text-lg font-bold font-roboto leading-snug'>
              {messages.footer.title}
            </div>
            <div className='text-center text-neutral-100 text-base font-normal font-roboto leading-snug tracking-tight'>
              {messages.footer.description}
            </div>
          </div>
          <div className='w-full h-14 relative border-t border-neutral-700/25'>
            <div className='absolute left-1/2 transform -translate-x-1/2 top-[33px] text-neutral-400 text-base font-normal font-inter leading-normal'>
              {messages.footer.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
