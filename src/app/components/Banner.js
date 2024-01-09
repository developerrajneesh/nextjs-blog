import React from "react";
import Tab from "./Tab";

function Banner({height,setFilterState}) {
  return (
    <div className="banner  position-relative">
      <div className="d-flex  h-100 align-items-center justify-content-center">
       <div>
       <h1 className="text-light text-center">Wellcome to my Blog site</h1>
        <p className="text-light mt-4 text-center">
          "Code Crafted, Ideas Explored: Where Software Meets Creativity in
          Every Line of Blog Byte."
        </p>
       </div>
      </div>
      <Tab setFilterState={setFilterState} height={height}/>
    </div>
  );
}

export default Banner;
