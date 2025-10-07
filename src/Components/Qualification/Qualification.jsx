import React from 'react';

const Qualification = () => {
    return (
//         <div className='bg-[#0c1829] text-[#FFFFFF]'> 
//           <div className='bg-[#0c1829] flex justify-center items-center text-3xl font-bold text-[#FFFFFF]  '>

// <h1 className='mt-10'>Education Qualification</h1>
// </div>
//             <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
//   <li>
//     <div className="timeline-middle">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
//     </div>
//     <div className="timeline-start md:text-end mb-10">
//       <time className="font-mono italic">2021-2023</time>
//       <div className="text-lg font-black">B.Sc In Computer Science Engineering</div>
//       Port City International University
//     </div>
//     <hr/>
//   </li>
//   <li>
//     <hr />
//     <div className="timeline-middle">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
//     </div>
//     <div className="timeline-end mb-10">
//       <time className="font-mono italic">2019</time>
//       <div className="text-lg font-black">Noapara University College</div>
//       Science || Gpa:4.00
//     </div>
//     <hr />
//   </li>
//   <li>
//     <hr />
//     <div className="timeline-middle">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
//     </div>
//     <div className="timeline-start md:text-end mb-10">
//       <time className="font-mono italic">2017</time>
//       <div className="text-lg font-black">Noapara High School</div>
//      Science || Gpa: 4.94
//     </div>
//     <hr />
//   </li>

// </ul>
//         </div>
<div className='bg-[#0c1829] text-white py-12 px-4 md:px-12'>
  {/* Heading */}
  <div className='flex justify-center items-center mb-12'>
    <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>
      Education Qualification
    </h1>
  </div>

  {/* Cards Container */}
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
    
    {/* B.Sc Card */}
    <div className='bg-[#1a2438] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300'>
      <div className='flex items-center mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c5a7a4] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.623L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14L5.84 17.201a12.083 12.083 0 00.84-6.623L12 14z" />
        </svg>
        <h3 className='text-xl font-bold'>B.Sc In Computer Science Engineering</h3>
      </div>
      <p className='italic text-gray-300 mb-1'>2021-2025</p>
      <p className='text-gray-400'>Port City International University</p>
      <p className='text-gray-400 font-semibold mt-2'>CGPA: 3.83</p>
    </div>

    {/* HSC Card */}
    <div className='bg-[#1a2438] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300'>
      <div className='flex items-center mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c5a7a4] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.623L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14L5.84 17.201a12.083 12.083 0 00.84-6.623L12 14z" />
        </svg>
        <h3 className='text-xl font-bold'>Noapara University College</h3>
      </div>
      <p className='italic text-gray-300 mb-1'>2018</p>
      <p className='text-gray-400'>Science</p>
      <p className='text-gray-400 font-semibold mt-2'>GPA: 4.00</p>
    </div>

    {/* SSC Card */}
    <div className='bg-[#1a2438] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300'>
      <div className='flex items-center mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c5a7a4] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.623L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14L5.84 17.201a12.083 12.083 0 00.84-6.623L12 14z" />
        </svg>
        <h3 className='text-xl font-bold'>Noapara High School</h3>
      </div>
      <p className='italic text-gray-300 mb-1'>2016</p>
      <p className='text-gray-400'>Science</p>
      <p className='text-gray-400 font-semibold mt-2'>GPA: 4.94</p>
    </div>

  </div>
</div>






    );
};

export default Qualification;