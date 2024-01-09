import React from "react";

function Card({ item }) {
  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = dateObject.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <div className="custom-card custom-card-blog">
        <img
          src={`https://cpapi.rajneesh.site/${item.img}`}
          className="img-blog"
          alt="img-blog"
        />
        <div className="d-flex justify-content-between align-items-center">
          <p className="my-3 blog-title">{item.author}</p>
          <p className="my-3">{formatDate(item.createdAt)}</p>
        </div>
        <h3 className=" blog-title">{`${item.title}`}</h3>{" "}
        <div
          className="text-blog"
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: item.contant }}
        ></div>
      </div>
    </>
  );
}

export default Card;
