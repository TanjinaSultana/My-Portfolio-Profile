import skill from '../../../public/image/Add a heading.png'
import skill1 from '../../../public/image/Add a heading (1).png'
import skill2 from '../../../public/image/Add a heading (2).png'
import skill3 from '../../../public/image/Add a heading (3).png'
import skill4 from '../../../public/image/Add a heading (4).png'
import skill5 from '../../../public/image/Add a heading (5).png'
import skill6 from '../../../public/image/Add a heading (6).png'
import skill7 from '../../../public/image/Add a heading (7).png'

const Skill = () => {
    return (
//         <div className='bg-[#0c1829]'>
//             <div className='bg-[#0c1829] flex justify-center items-center text-3xl font-bold text-[#FFFFFF]  '>

//             <h1 className='mt-10'>Skills</h1>
//             </div>
//             <div className="carousel w-full mt-10">
//   <div id="slide1" className="carousel-item relative w-full">
//     <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>

//     <img src={skill1} className="w-full " />
//     <img src={skill2} className="w-full " />
//     <img src={skill3} className="w-full " />
//     <img src={skill} className="w-full" />
//     <img src={skill4} className="w-full" />
//     <img src={skill5} className="w-full" />
//     <img src={skill6} className="w-full" />
//     <img src={skill7} className="w-full" />
    
//     </div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//   <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>

//   <img src={skill1} className="w-full " />
//     <img src={skill2} className="w-full " />
//     <img src={skill3} className="w-full " />
//     <img src={skill} className="w-full" />
//     <img src={skill4} className="w-full" />
//     <img src={skill5} className="w-full" />
//     <img src={skill6} className="w-full" />
//     <img src={skill7} className="w-full" />
// </div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//   <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>

//   <img src={skill1} className="w-full " />
//     <img src={skill2} className="w-full " />
//     <img src={skill3} className="w-full " />
//     <img src={skill} className="w-full" />
//     <img src={skill4} className="w-full" />
//     <img src={skill5} className="w-full" />
//     <img src={skill6} className="w-full" />
//     <img src={skill7} className="w-full" />
// </div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//   <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4'>

//   <img src={skill1} className="w-full " />
//     <img src={skill2} className="w-full " />
//     <img src={skill3} className="w-full " />
//     <img src={skill} className="w-full" />
//     <img src={skill4} className="w-full" />
//     <img src={skill5} className="w-full" />
//     <img src={skill6} className="w-full" />
//     <img src={skill7} className="w-full" />
// </div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//             </div>
<div className="bg-[#0c1829] py-4">
  {/* Heading */}
  <div className="flex justify-center items-center">
    <h1 className="text-2xl sm:text-5xl font-bold text-white mb-10 text-center">Skills</h1>
  </div>

  {/* Carousel */}
  <div className="carousel w-full">
    
    {/* Slides */}
    {[1, 2, 3, 4].map((slide) => (
      <div key={slide} id={`slide${slide}`} className="carousel-item relative w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-10">
          <img src={skill1} className="w-full h-auto object-contain" />
          <img src={skill2} className="w-full h-auto object-contain" />
          <img src={skill3} className="w-full h-auto object-contain" />
          <img src={skill} className="w-full h-auto object-contain" />
          <img src={skill4} className="w-full h-auto object-contain" />
          <img src={skill5} className="w-full h-auto object-contain" />
          <img src={skill6} className="w-full h-auto object-contain" />
          <img src={skill7} className="w-full h-auto object-contain" />
        </div>

        {/* Navigation buttons */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${slide === 1 ? 4 : slide - 1}`} className="btn btn-circle">❮</a> 
          <a href={`#slide${slide === 4 ? 1 : slide + 1}`} className="btn btn-circle">❯</a>
        </div>
      </div>
    ))}
  </div>
</div>

            
       
    );
};

export default Skill;