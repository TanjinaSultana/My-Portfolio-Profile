import React from 'react';

const Qualification = () => {
    return (
        <div className='bg-[#0c1829] text-[#FFFFFF]'> 
          <div className='bg-[#0c1829] flex justify-center items-center text-3xl font-bold text-[#FFFFFF]  '>

<h1 className='mt-10'>Education Qualification</h1>
</div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2021-2023</time>
      <div className="text-lg font-black">B.Sc In Computer Science Engineering</div>
      Port City International University
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2019</time>
      <div className="text-lg font-black">Noapara University College</div>
      Science || Gpa:4.00
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2017</time>
      <div className="text-lg font-black">Noapara High School</div>
     Science || Gpa: 4.94
    </div>
    <hr />
  </li>

</ul>
        </div>
    );
};

export default Qualification;