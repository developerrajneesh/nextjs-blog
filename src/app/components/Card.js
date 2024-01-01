import React from "react";

function Card() {
  return (
    <>
      <div className="custom-card">
        <img src={'/gkTruckImg.png'} className="img-blog" alt="img-blog" />
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-3">{'Lorem jdqjd efwefi ewfewf fewfwef'}</h3>{" "}
          <p className="my-3">20/12/2023</p>
        </div>
        <p>{'lorem ffew ewfwefew ewgewg ewgweg ewgwg wegw ewgg gewg egwgw gwegw gwegwe gweg wgwg ew'}</p>
        <p>{'lorem ffew ewfwefew ewgewg ewgweg ewgwg wegw ewgg gewg egwgw gwegw gwegwe gweg wgwg ew'}</p>
      </div>
    </>
  );
}

export default Card;
