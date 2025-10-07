import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i02m9bg', 'template_5gop7se', form.current, 'V-TpGrISkvF-93bbL')
        .then((result) => {
            toast.success('I will contact with you soon.',result.text); 
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
//         <div className='bg-[#0c1829]'>
//            <h1 className="text-3xl font-bold flex justify-center bg-[#0c1829] text-[#FFFFFF] ">Contact </h1>
//   <div className="hero min-h-screen bg-[#0c1829]  ">
 
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-xl text-[#FFFFFF] font-bold">My Contacts!</h1>
//       <p className="py-6">
//       <nav>
   
//     <div className="grid grid-flow-col gap-4 text-[#FFFFFF]">
//     <a href="https://www.linkedin.com/in/tanjina-sultana-2658092a3" target="_blank" rel="noopener noreferrer">
//     {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
// <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
// </svg> */}
// <svg xmlns="http://www.w3.org/2000/svg"height="24" width="24" className='bg-[#FFFFFF]'  viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>

// </a>
// <a href="https://github.com/TanjinaSultana" target="_blank" rel="noopener noreferrer">
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='text-[#FFFFFF]' viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.225.703-3.905-1.54-3.905-1.54-.527-1.343-1.289-1.7-1.289-1.7-1.055-.72.08-.705.08-.705 1.17.083 1.785 1.203 1.785 1.203 1.04 1.785 2.734 1.27 3.395.97.105-.757.405-1.27.737-1.56-2.585-.295-5.297-1.292-5.297-5.74 0-1.27.45-2.31 1.203-3.12-.12-.297-.522-1.477.114-3.07 0 0 1.02-.312 3.34 1.187.97-.27 2.01-.405 3.05-.41 1.04.005 2.08.14 3.05.41 2.32-1.5 3.34-1.187 3.34-1.187.637 1.593.234 2.773.114 3.07.75.81 1.203 1.85 1.203 3.12 0 4.457-2.717 5.44-5.327 5.725.42.36.792 1.066.792 2.15 0 1.55-.015 2.797-.015 3.177 0 .315.18.693.8.576C20.565 21.798 24 17.303 24 12 24 5.37 18.63 0 12 0z"/>
//   </svg>
// </a>

// <a href="mailto:tanjinasultana388@gmail.com" target="_blank" rel="noopener noreferrer" className='bg-[#FFFFFF]'>
// <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='bg-[#FFFFFF]'  viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
// </a>


    
//     </div>
// <a href="+8801641715275" target="_blank" rel="noopener noreferrer" className='flex text-[#FFFFFF] mt-4'>
// <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='bg-[#FFFFFF]' viewBox="0 0 448 512"><path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/>
// </svg>
// <span className='font-base'>+8801641715275</span>
// </a>
      
//   </nav> 
//       </p>
//     </div>
//     <div className="card shrink-0 bg-[#c5a7a4] w-full max-w-sm shadow-2xl mr-20">
//       <form className="card-body"  ref={form} onSubmit={sendEmail}>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input type="name" placeholder="Name" name="user_name" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Contact Number</span>
//           </label>
//           <input type="number" placeholder="Contact Number" name="user_number" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" placeholder="email" name="user_email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Mesage</span>
//           </label>
//           <textarea  type="text" placeholder="Message" name="message" className="textarea textarea-bordered"  required />
         
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn bg-[#0c1829] text-[#FFFFFF]">Send</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//         </div>
<div className="bg-[#0c1829] py-20 flex justify-center items-center min-h-screen">
  <div className="w-full max-w-md px-6">
    <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
      Contact
    </h1>
    <div className="card bg-[#c5a7a4] shadow-2xl rounded-2xl">
      <form className="card-body" ref={form} onSubmit={sendEmail}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="user_name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Contact Number</span>
          </label>
          <input
            type="number"
            placeholder="Enter your contact number"
            name="user_number"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="user_email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Message</span>
          </label>
          <textarea
            placeholder="Type your message..."
            name="message"
            className="textarea textarea-bordered"
            rows="4"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#0c1829] text-white hover:bg-[#14233d] transition duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default Contact;