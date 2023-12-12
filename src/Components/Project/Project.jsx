/* eslint-disable react/no-unescaped-entities */
import image1 from '../../../public/image/project2.png'
import image2 from '../../../public/image/project.png'
import image3 from '../../../public/image/project1.png'


const Project = () => {
    return (
        <div className='bg-[#0c1829]'>
            <div className="hero min-h-screen bg-[#0c1829]">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image2} className="max-w-full lg:w-[500px] rounded-lg shadow-2xl " />
    <div className=' w-[500px]'>
      <h1 className="text-5xl font-bold text-[#FFFFFF]">Tour And Guide</h1>
      <p className="py-6 w-[500px] text-[#FFFFFF]">Tour-And-Guide is an Ecommerce Website.Where user,admin and tour-guide dashboard feature added and also integrated payment system with stripe method.</p>
      {/* <button className="btn bg-[#c5a7a4] text-[#0c1829] "></button> */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-[#c5a7a4] text-[#0c1829]" onClick={()=>document.getElementById('my_modal_1').showModal()}>Explore More</button>
<dialog id="my_modal_1" className="modal ">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Tour And Guide E-commerce Platform [5days]</h3>
   
<h2 className='font-bold'>Description:</h2>
<p>

● Engineered responsive and visually engaging user interfaces with React.js, Material-UI, HTML5, and CSS3,
resulting in a seamless browsing experience for tourists and guides.
</p>
<p>

● Developed distinct dashboards for administrators, tour guides, and tourists, enhancing user
engagement and accessibility.
</p>
<p>

● Integrated a secure payment process, leveraging industry-standard encryption techniques for
seamless and trustworthy transactions.
</p>
<p className='font-medium'>

Technologies Used:React.js, Material-UI, JavaScript, HTML, Material UI, Express.js, MongoDB
</p>
<div className=' flex justify-center items-center'>
<button className="btn btn-outline bg-[#c5a7a4]  mr-4">

<a href="https://tour-guide-b6f45.web.app">Live Link</a> 
</button>

</div>
  </div>
</dialog>
    </div>
  </div>
</div>
<div className="hero min-h-screen bg-[#0c1829] -mt-0 md:-mt-18 lg:-mt-48">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image3} className=" max-w-full lg:w-[500px] rounded-lg shadow-2xl" />
    <div className=''>
      <h1 className="text-5xl font-bold text-[#FFFFFF]">Local Tour Guide</h1>
      <p className="py-6 w-[500px] text-[#FFFFFF]">Local Tour is a tour service based website.In this website user can book tour according their Choice.Dasboard feature are added where can manage and add tours</p>
      <button className="btn bg-[#c5a7a4] text-[#0c1829]" onClick={()=>document.getElementById('my_modal_7').showModal()}>Explore More</button>
<dialog id="my_modal_7" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Local Tour And Guide Ecommerce [4days]
</h3>
   
<h2 className='font-bold'>Description:</h2>
<p>

● Optimized website performance through efficient database queries and responsive design principles.
</p>
<p>

● Engineered and deployed a robust service booking system for a local tour and guide e-commerce website,
leveraging cutting-edge technologies.
</p>
<p>

● Implemented an intuitive dashboard with Express.js and MongoDB for tour operators to efficiently
manage and showcase their services.
</p>
<p className='font-medium'>

Technology Used:React.js, JavaScript (JS), Mamba UI, HTML, CSS3, Express.js, MongoDB
</p>
<div className=' flex justify-center items-center'>
<button className="btn btn-outline bg-[#c5a7a4]  mr-4">

<a href="https://service-client-side.web.app">Live Link</a> 
</button>

</div>
  </div>
</dialog>
    </div>
  </div>
</div>
<div className="hero min-h-screen bg-[#0c1829] -mt-0 md:-mt-18 lg:-mt-48">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image1} className="max-w-full lg:w-[500px] rounded-lg shadow-2xl " />
    <div>
      <h1 className="text-5xl font-bold text-[#FFFFFF]">ReMerce</h1>
      <p className="py-6 w-[500px] text-[#FFFFFF]">BrandShop is a website based on with some popular branded.Add to cart feature are added and user can update and delete the product.Authentication are added.</p>
      {/* <button className="btn bg-[#c5a7a4] text-[#0c1829] "></button> */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-[#c5a7a4] text-[#0c1829]" onClick={()=>document.getElementById('my_modal_9').showModal()}>Explore More</button>
<dialog id="my_modal_9" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">ReMerce E-commerce Website [2days] </h3>
   
<h2 className='font-bold'>Description:</h2>
<p>

● Engineered a seamless and dynamic"Add to Cart"feature using React.js, JavaScript, and Daisy UI to
enhance the user shopping experience. 
</p>
<p>

● Implemented an intuitive interface allowing users to effortlessly add products to their cart, providing a
frictionless ecommerce journey. 
</p>
<p>
● Utilized Express.js and MongoDB to securely store and retrieve cart data, optimizing for efficiency
</p>
<p className='font-medium'>

Technology Used:React.js, JavaScript (JS), Daisy UI, HTML,
CSS3,Express.js&MongoDB
</p>
<div className=' flex justify-center items-center'>
<button className="btn btn-outline bg-[#c5a7a4]  mr-4">

<a href="https://brandshop-client-side-43a1b.web.app">Live Link</a> 
</button> 

</div>
  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default Project;