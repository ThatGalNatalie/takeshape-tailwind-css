import Link from 'next/link';

const Card = ({ allJobs }) => {
  const { items } = allJobs.getJobList;

  return (
    <section className='grid grid-cols-3'>
      {items.map((job) => {
        return (
          <div
            className='max-w-sm rounded overflow-hidden shadow-lg m-10'
            key={job._id}
          >
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{job.company.name}</div>
              <p className='text-gray-700 text-base'>
                {job.body.blocks[0].text}...
              </p>
            </div>

            <div className='px-6 pt-4 pb-2'>
              <Link href='/[id]' as={`/${job._id}`}>
                <button className='bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4'>
                  Apply
                </button>
              </Link>

              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                {job.title}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
