import React,{ useState }from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import searchIcon from "../assets/search.svg";
import { BiSearchAlt } from "react-icons/bi";
const debounce = (fn, delay) => {
  let timeOut;
  return (...args) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const Main = () => {
  const [search, setSearch] = useState("");
  const handleSearch = debounce((e) => setSearch(e.target.value), 800);
  return (
    <>
       {/* for header start  */}
       <nav className="h-14 bg-stone-100 rounded-full m-2 max-w-7xl mx-auto px-5">
        <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
          <h1>Blog Site</h1>

          <li className="flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3">
            <input
              className="h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
              type="search"
              name="search"
              placeholder="Search"
              onChange={handleSearch}
            />
            <button>
              <BiSearchAlt />
            </button>
    
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
       
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
     
        </ul>
      </nav>
      {/* for header end  */}
      <div className='px-10'>

      <Outlet />
    </div>
    </>
  
  );
};

export default React.memo(Main);
