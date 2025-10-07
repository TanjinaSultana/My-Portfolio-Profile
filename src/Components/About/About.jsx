import React from 'react';
import image from '../../../public/image/340ed466-2f4d-4d44-98b8-edc1e2a37ab0.jpeg'
const About = () => {
    return (
//         <div>
//            <div className='bg-[#0c1829] flex justify-center items-center text-3xl font-bold text-[#FFFFFF]  '>

//             <h1 className='mt-10'>About</h1>
//             </div>
//             <div className="hero min-h-screen bg-[#0c1829]">
               
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <img src={image} className="max-w-sm rounded-lg shadow-2xl h-[400px] w-[400px]" />
//     <div className='text-[#FFFFFF] font-normal w-[400px]'>
//       <p className="py-6">Assalamualaykum! I am Tanjina Sultana, a passionate frontend developer with a flair for transforming imaginative ideas into captivating digital experiences. My journey in the world of coding began with a curiosity to bridge the gap between creativity and technology.</p>
//       <button className="btn bg-[#c5a7a4] text-[#0c1829]">Hire me</button>
//     </div>
//   </div>
// </div>

//         </div>

<div className="bg-[#0c1829] min-h-screen px-4 sm:px-6 lg:px-20 py-10">

  {/* Fixed heading */}
  <div className="flex justify-center items-center">
    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-10">About</h1>
  </div>

  {/* Hero content */}
  <div className="hero min-h-screen flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">

    {/* Image */}
    <img 
      src={image} 
      alt="Tanjina Sultana" 
      className="rounded-lg shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px] lg:h-[400px] object-cover"
    />

    {/* Text and Button */}
    <div className="text-white font-normal w-full sm:w-[400px] text-center lg:text-left flex flex-col items-center lg:items-start">
      <p className="py-4 sm:py-6 text-base sm:text-lg md:text-xl">
        Assalamualaykum! I am Tanjina Sultana, a passionate frontend developer with a flair for transforming imaginative ideas into captivating digital experiences. My journey in the world of coding began with a curiosity to bridge the gap between creativity and technology.
      </p>
      <button className="btn bg-[#c5a7a4] text-[#0c1829] px-6 py-2 text-base sm:text-lg mt-4">
        Hire me
      </button>
    </div>

  </div>
</div>




    );
};

export default About;