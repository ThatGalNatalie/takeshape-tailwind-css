import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

const Apply = () => {
  const router = useRouter();

  return (
    <section>
      <Navbar />

      <div className='grid place-items-center p-10'>
        <h1 className='mb-16 text-4xl text-green-400'>{router.query.title}</h1>
        <form className='w-full max-w-lg'>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-password'
              >
                Full Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='nick'
                type='text'
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-password'
              >
                Email
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='email'
                type='email'
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-password'
              >
                Cover Letter
              </label>
              <textarea
                className=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
                id='message'
              ></textarea>
            </div>
          </div>

          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'>
              <button
                className='shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                type='button'
              >
                Apply
              </button>
            </div>
            <div className='md:w-2/3'></div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Apply;
