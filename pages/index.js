import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import LandingIllustration from '../assets/project-team.svg';

function Home() {
  return (
    <div>
      <Head>
        <title>TakeShape Tailwind CSS </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <main className='bg-white font-montserrat'>
          <Navbar />

          <div className='container mx-auto flex flex-col-reverse sm:flex-row items-center'>
            <div className='sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0'>
              <h1 className='text-4xl lg:text-6xl leading-none mb-4'>
                Find a <strong className='font-black'>great</strong> job near
                you
              </h1>
              <p className='lg:text-lg mb-4 sm:mb-12'>
                Find your dream job today. View our job board for all available
                listings.
              </p>

              <Link href='/job-board'>
                <button className='font-semibold text-lg bg-green-400 hover:bg-green-500 text-white py-3 px-10 rounded'>
                  View
                </button>
              </Link>
            </div>
            <div className='sm:w-1/5 mb-10'>
              <div className='m-5'>
                <LandingIllustration />
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Home;
