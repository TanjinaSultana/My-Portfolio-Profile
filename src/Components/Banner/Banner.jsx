import React from 'react';
import banner from '../../../public/image/Marketing Agency.gif'

const Banner = () => {
    return (
        // <div className='w-full'>
        //      <img src={banner} className='w-full h-[90vh]'></img>
        // </div>
        <div className="w-full">
  <img 
    src={banner} 
    alt="Banner" 
    className="w-full h-auto max-h-[90vh] object-cover"
  />
</div>

    );
};

export default Banner;