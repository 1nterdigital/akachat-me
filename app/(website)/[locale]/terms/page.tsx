import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { getMessages, type Locale } from '@/lib/i18n';

interface TermsPageProps {
  readonly params: Promise<{ locale: Locale }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
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

      {/* Terms Content */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>{messages.terms.title}</h1>
        <p className='text-gray-600 mb-8'>{messages.terms.lastUpdated}</p>

        <div className='prose prose-lg max-w-none'>
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.terms.acceptanceOfTerms.title}
            </h2>
            <p className='text-gray-700 mb-4'>{messages.terms.acceptanceOfTerms.description}</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.terms.descriptionOfService.title}
            </h2>
            <p className='text-gray-700 mb-4'>{messages.terms.descriptionOfService.description}</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.terms.userAccounts.title}
            </h2>
            <p className='text-gray-700 mb-4'>{messages.terms.userAccounts.description}</p>
            <ul className='list-disc pl-6 text-gray-700 space-y-2'>
              {messages.terms.userAccounts.requirements.map((requirement: string) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {messages.terms.contactInformation.title}
            </h2>
            <p className='text-gray-700 mb-4'>{messages.terms.contactInformation.description}</p>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <p className='text-gray-700'>{messages.terms.contactInformation.email}</p>
              <p className='text-gray-700'>{messages.terms.contactInformation.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

