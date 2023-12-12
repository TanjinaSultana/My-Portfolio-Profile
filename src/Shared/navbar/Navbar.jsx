import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const menu= <>
     <li><a className='bg-[#c5a7a4] mr-4'> <NavLink to={"/"} className="text-[#0c1829] font-medium">Home</NavLink></a></li>
     <li><a className='bg-[#c5a7a4] mr-4'> <NavLink to={"/about"} className="text-[#0c1829] font-medium">About</NavLink></a></li>
     <li><a className='bg-[#c5a7a4] mr-4'> <NavLink to={"/skill"} className="text-[#0c1829] font-medium">Skills</NavLink></a></li>
     <li><a className='bg-[#c5a7a4] mr-4'> <NavLink to={"/experience"} className="text-[#0c1829] font-medium">Experience</NavLink></a></li>
     <li><a className='bg-[#c5a7a4] mr-4'> <NavLink to={"/project"} className="text-[#0c1829] font-medium">Projects</NavLink></a></li>
     <li><a className='bg-[#c5a7a4] mr-4'> <NavLink to={"/contact"} className="text-[#0c1829] font-medium">Contact</NavLink></a></li>
   
    </>

    return (
        <div>
            {/* #c5a7a4 */}
            <div className="navbar bg-[#0c1829]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {menu}
      </ul>
    </div>
    <a className="btn btn-ghost italic text-xl md:text-2xl lg:text-4xl text-[#FFFFFF]">Tanjina<span className='text-[#c5a7a4]'>Sultana</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menu}
      </ul>
      {/* https://drive.google.com/file/d/1GctOe-Og235XUeN9a1OiAg4jksGCT398/view?usp=sharing */}
  </div>
  <div className="navbar-end">
  <a href='https://drive.google.com/uc?export=download&id=1GctOe-Og235XUeN9a1OiAg4jksGCT398' className='btn bg-[#c5a7a4]' download target='_blank' rel="noopener noreferrer">Resume</a>
  
  </div>
</div>
        </div>
    );
};

export default Navbar;