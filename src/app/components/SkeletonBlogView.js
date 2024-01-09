import React from "react";

function SkeletonBlogView() {
  return (
    <>
    <div className="container py-3">

      <p class="card-text placeholder-glow">
        <span style={{ height: "30px" }} class="placeholder col-10 my-3"></span>
        <span style={{ height: "600px" }} class="placeholder col-12 "></span>
        <span style={{ height: "20px" }} class="placeholder col-11 "></span>
        <span style={{ height: "20px" }} class="placeholder col-8 "></span>
        <span style={{ height: "20px" }} class="placeholder col-9 "></span>
        <span style={{ height: "20px" }} class="placeholder col-6 "></span>
        <span style={{ height: "20px" }} class="placeholder col-10 "></span>
        <span style={{ height: "20px" }} class="placeholder col-11 "></span>
        <span style={{ height: "20px" }} class="placeholder col-12 "></span>
        <span style={{ height: "20px" }} class="placeholder col-12 "></span>
      </p>
    </div>
    </>
  );
}

export default SkeletonBlogView;
