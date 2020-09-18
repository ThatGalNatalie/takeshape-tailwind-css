import Link from 'next/link';

const Navbar = () => {
  return (
    <section>
      <header className='h-24 sm:h-32 flex items-center'>
        <div className='container mx-auto px-6 sm:px-12 flex items-center justify-between'>
          <div className='text-black font-black text-2xl flex items-center'>
            <span className='w-6 h-6 rounded-full bg-green-400 mr-4'></span>{' '}
            <Link href='/'>Métier</Link>
          </div>
          <div className='flex items-center'>
            <nav className='text-black text-lg hidden lg:flex items-center'>
              <Link href='/'>
                <a className='py-2 px-6 flex hover:text-green-400'>Home</a>
              </Link>
              <Link href='/job-board'>
                <a href='#' className='py-2 px-6 flex hover:text-green-400'>
                  Job Board
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
