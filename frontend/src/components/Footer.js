import { React } from "react";

import olxlogo from "../static/olxlogo.webp";

const Footer = () => {
  return (
    <div>
      {/* first div */}
      <div className="flex justify-evenly px-56 bg-white mt-6">
        <div>
          POPULAR LOCATIONS
          <ul class="list-none">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        

        <div>
          POPULAR LOCATIONS
          <ul class="list-none">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

        <div>
          About OLX 
          <ul class="list-none">
            <li>Careers</li>
            <li>Contact Us</li>
            <li>OLXPeople</li>
            <li>Waah Jobs</li>
          </ul>
        </div>

        <div>
          <div className="h-25 flex justify-evenly">

          </div>
          <div className="h-25"></div>
        </div>
      </div>


      

      {/* second part div */}
      <div
        className="w-full flex h-16 mt-4 justify-between"
        style={{ backgroundColor: "#002f34" }}
      >
        <p className="text-white px-24 mt-5"> Help - Sitemap</p>
        <p className="text-white pr-24  mt-5">All rights reserved © 2006-2023 OLX </p>
      </div>
    </div>
  );
};

export default Footer;
