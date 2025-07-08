import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { getMessages, type Locale } from '@/lib/i18n';

interface PrivacyPageProps {
  readonly params: Promise<{ locale: Locale }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <Link
              href={`/${locale}`}
              className='flex items-center text-2xl font-bold text-gray-900'>
              <Image src='/logo.svg' alt='AkaChat Logo' width={100} height={100} />
            </Link>
            <Link
              href={`/${locale}`}
              className='flex items-center text-gray-600 hover:text-gray-900'>
              <ArrowLeft className='h-4 w-4 mr-2' />
              {messages.nav.backToHome}
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>{messages.privacy.title}</h1>

        <div className='prose prose-lg max-w-none'>
          <p className='text-gray-700 mb-6'>{messages.privacy.introduction}</p>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.privacy.informationCollection.title}
            </h2>
            <p className='text-gray-700 mb-6'>
              {messages.privacy.informationCollection.description}
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.privacy.appFunctionality.title}
            </h2>
            <p className='text-gray-700 mb-6'>{messages.privacy.appFunctionality.description}</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.privacy.yourConsent.title}
            </h2>
            <p className='text-gray-700 mb-6'>{messages.privacy.yourConsent.description}</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.privacy.feedback.title}
            </h2>
            <p className='text-gray-700 mb-6'>{messages.privacy.feedback.description}</p>
          </section>

          <p className='text-gray-700 mb-6'>{messages.privacy.closing}</p>

          <p className='text-gray-600 mt-8'>{messages.privacy.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}
