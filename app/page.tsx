import Link from 'next/link';
import { CheckCircle, Users, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <div className='flex items-center'>
              <Link href='/' className='text-2xl font-bold text-blue-600'>
                <Image src='/logo.svg' alt='AkaChat Logo' width={100} height={100} />
              </Link>
            </div>
            <nav className='hidden md:flex space-x-8'>
              <Link href='/privacy' className='text-gray-600 hover:text-gray-900'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-gray-600 hover:text-gray-900'>
                Terms of Service
              </Link>
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
                AkaChat – Faster, Smarter Team
                <span className='text-blue-600'> Collaboration</span> Without the Hassle!
              </h1>
              <p className='text-xl text-gray-600 mb-8'>
                A professional messaging solution designed to streamline team communication and
                boost your company's productivity through focused chat experiences.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  title='Download on the App Store'
                  href='https://apps.apple.com/app/akachat/id1234567890'
                  className='text-white transition-transform hover:scale-105 flex items-center justify-center'>
                  <Image
                    src='/app-store.png'
                    alt='Download on the App Store'
                    width={150}
                    height={44}
                    className='h-11'
                  />
                </a>
                <a
                  title='Get it on Google Play'
                  href='https://play.google.com/store/apps/details?id=com.akachat.app'
                  className='text-white transition-transform hover:scale-105 flex items-center justify-center'>
                  <Image
                    src='/play-store.png'
                    alt='Get it on Google Play'
                    width={150}
                    height={44}
                    className='h-11'
                  />
                </a>
              </div>
              <p className='text-sm text-gray-500 mt-4'>
                *You may need to register as company to use this apps
              </p>
            </div>

            <div className='relative'>
              <div className='animate-float'>
                <Image
                  src='/hero.png'
                  alt='Team collaboration illustration showing people working together with chat bubbles and digital tools'
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
              Why Teams Choose AkaChat
            </h2>
            <p className='text-xl text-gray-600'>Everything you need for seamless collaboration</p>
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
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Real-Time Messaging</h3>
              <p className='text-gray-600'>
                Instant messaging and file sharing in one clean, focused platform.
              </p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/SealCheck.svg?height=64&width=64'
                  alt='Simple focused messaging illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Simple & Focused</h3>
              <p className='text-gray-600'>
                A clean messaging experience without the complexity of unnecessary features.
              </p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/Kanban.svg?height=64&width=64'
                  alt='Team channels illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Organized Team Channels</h3>
              <p className='text-gray-600'>
                Create dedicated team channels to keep conversations organized and focused.
              </p>
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
                Enterprise-Grade Security
              </h3>
              <p className='text-gray-600'>
                End-to-end encryption and advanced admin controls to keep your data safe.
              </p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/UsersThree.svg?height=64&width=64'
                  alt='All teams working together illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>Built for All Teams</h3>
              <p className='text-gray-600'>
                From HR to Engineering, AkaChat helps every department communicate better.
              </p>
            </div>

            <div className='text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2'>
              <div className='mb-4'>
                <img
                  src='/Headset.svg?height=64&width=64'
                  alt='24/7 support illustration'
                  className='w-16 h-16 mx-auto mb-4 animate-pulse-slow'
                />
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>24/7 Support</h3>
              <p className='text-gray-600'>
                Get help whenever you need it with our dedicated support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#3D71DE] mb-4'>
              Perfect for Every Team
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
              <div className='mb-6'>
                <img
                  src='/UsersFour.svg?height=110&width=110'
                  alt='Remote team messaging illustration showing people communicating from different locations'
                  className='w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>For Remote Teams</h3>
              <p className='text-gray-600'>
                Stay connected with instant messaging no matter where your team is located.
              </p>
            </div>

            <div className='text-center p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
              <div className='mb-6'>
                <img
                  src='/ProjectsMan.svg?height=110&width=110'
                  alt='Team communication illustration showing organized messaging channels'
                  className='w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>For Team Leaders</h3>
              <p className='text-gray-600'>
                Keep your team informed with organized channels and clear communication flows.
              </p>
            </div>

            <div className='text-center p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group'>
              <div className='mb-6'>
                <img
                  src='/Sales.svg?height=110&width=110'
                  alt='Sales and marketing team messaging illustration showing quick team coordination'
                  className='w-28 h-28 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>For Sales & Marketing</h3>
              <p className='text-gray-600'>
                Share updates quickly, discuss strategies, and keep everyone aligned through focused
                messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Showcase */}
      <section className='py-20 bg-gradient-to-r from-blue-50 to-purple-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                See Your Team's Communication
                <span className='text-blue-600'> Improve</span>
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                Watch as your team transforms from scattered messaging to organized communication.
                AkaChat brings everyone together in one focused platform.
              </p>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                  <CheckCircle className='h-5 w-5 text-green-600' />
                </div>
                <span className='text-gray-700'>Faster team responses</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                  <CheckCircle className='h-5 w-5 text-green-600' />
                </div>
                <span className='text-gray-700'>90% team satisfaction rate</span>
              </div>
            </div>

            <div className='relative'>
              <div className='animate-float-slow'>
                <img
                  src='/TeamsProd.png'
                  alt='Large team collaboration illustration showing multiple people working together with various digital tools, chat interfaces, and project boards'
                  className='w-full h-auto rounded-2xl shadow-2xl'
                />
              </div>
              {/* Animated floating elements */}
              <div className='absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg animate-bounce-slow'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='text-sm font-medium'>5 online</span>
                </div>
              </div>
              <div className='absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg animate-pulse'>
                <div className='flex items-center space-x-2'>
                  <Users className='h-4 w-4 text-blue-600' />
                  <span className='text-sm font-medium'>New message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-blue-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to transform your team's collaboration?
          </h2>
          <p className='text-lg font-normal text-blue-100 mb-8'>
            Download AkaChat today and see the difference focused messaging makes!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-4'>
            <a
              title='Download on the App Store'
              href='https://apps.apple.com/app/akachat/id1234567890'
              className='transition-transform hover:scale-105 flex items-center justify-center'>
              <Image
                src='/app-store.png'
                alt='Download on the App Store'
                width={150}
                height={44}
                className='h-12'
              />
            </a>
            <a
              title='Get it on Google Play'
              href='https://play.google.com/store/apps/details?id=com.akachat.app'
              className='transition-transform hover:scale-105 flex items-center justify-center'>
              <Image
                src='/play-store.png'
                alt='Get it on Google Play'
                width={150}
                height={44}
                className='h-12'
              />
            </a>
          </div>
          <div className="justify-center text-blue-100 text-sm font-normal font-['Inter'] leading-tight">
            *You may need to register as company to use this apps
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-neutral-800 h-80 relative'>
        <div className='mx-auto px-8 pt-16 flex flex-col justify-start items-center gap-8'>
          <div className='max-w-[652px] flex flex-col justify-start items-center gap-3.5'>
            <div className='text-center text-neutral-100 text-lg font-bold font-roboto leading-snug'>
              AkaChat – Faster, Smarter Team Collaboration Without the Hassle!
            </div>
            <div className='text-center text-neutral-100 text-base font-normal font-roboto leading-snug tracking-tight'>
              A professional chat solution designed to streamline team communication, integrate with
              your favorite tools, and boost your company's productivity.
            </div>
          </div>
          <div className='w-full h-14 relative border-t border-neutral-700/25'>
            <div className='absolute left-1/2 transform -translate-x-1/2 top-[33px] text-neutral-400 text-base font-normal font-inter leading-normal'>
              © 2025 Akachat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
