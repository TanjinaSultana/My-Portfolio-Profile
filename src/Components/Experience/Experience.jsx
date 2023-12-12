
import img1 from '../../../public/image/project.png'
import img2 from '../../../public/image/project1.png'
import img3 from '../../../public/image/project2.png'
const Experience = () => {
    return (
        <div className="bg-[#0c1829]">
            <h1 className="text-3xl font-bold flex justify-center bg-[#0c1829] text-[#FFFFFF] ">Experience </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title ">Tour And Guide</h2>
    <p>I Have working experience with React.js,JavaScript,Material ui,CSS,HTML,Express.js And Mongo.My experience are implemented in this Project.To View Details Click More</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-[#c5a7a4] "><a href="https://tour-guide-b6f45.web.app">Click More</a> </button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Local Guide And Tour</h2>
    <p>I Have working experience with React.js,JavaScript,Mamba ui,CSS,HTML,Express.js And Mongo.My experience are implemented in this Project.To View Details Click More</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-[#c5a7a4] "><a href="https://service-client-side.web.app">Click More</a> </button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">ReMerce</h2>
    <p>I Have working experience with React.js,JavaScript,Daisy ui,CSS,HTML,Express.js And Mongo.My experience are implemented in this Project.To View Details Click More</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-[#c5a7a4] "><a href="https://brandshop-client-side-43a1b.web.app">Click More</a> </button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Experience;