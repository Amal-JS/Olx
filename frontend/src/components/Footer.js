import { React } from "react";

import olxlogo from "../static/olxlogo.webp";

const Footer = () => {
  return (
    <div>
      {/* first div */}
      <div className="flex justify-evenly px-56 bg-white mt-6 ">
        <div>
          POPULAR LOCATIONS
          <ul className="list-none">
            <li className="text-sm">Kolkata</li>
            <li className="text-sm">Mumbai</li>
            <li className="text-sm">Chennai</li>
            <li className="text-sm">Pune</li>
          </ul>
        </div>

    

        <div>
          About OLX 
          <ul className="list-none">
            <li className="text-sm">Careers</li>
            <li className="text-sm">Contact Us</li>
            <li className="text-sm">OLXPeople</li>
            <li className="text-sm">Waah Jobs</li>
          </ul>
        </div>



        <div>
          POPULAR LOCATIONS
          <ul className="list-none">
            <li className="text-sm">Kolkata</li>
            <li className="text-sm">Mumbai</li>
            <li className="text-sm">Chennai</li>
            <li className="text-sm">Pune</li>
          </ul>
        </div>



        <div>
          <div className="h-25 flex justify-evenly">

          <i className="fa-brands fa-square-instagram  px-4" style={{color:"#374a4d",fontSize:'34px'}}></i>

          <i className="fa-brands fa-facebook-f px-4" style={{color:"#374a4d",fontSize:'34px'}}></i>


          <i className="fa-brands fa-twitter px-4" style={{color:"#374a4d",fontSize:'34px'}}></i>

          </div>
          <div className="h-25"></div>
        </div>
      </div>


      

      {/* second part div */}
      <div
        className="w-full flex h-16 mt-4 justify-between mb-3"
        style={{ backgroundColor: "#002f34" }}
      >
        <p className="text-white px-24 mt-5"> Help - Sitemap</p>
        <p className="text-white pr-24  mt-5">All rights reserved © 2006-2023 OLX </p>
      </div>
    </div>
  );
};

export default Footer;
