"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoPencilOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import NavbarHeader from "@/app/components/NavbarComponents";
import Footer from "@/app/components/Footer";
import SkeletonBlogView from "@/app/components/SkeletonBlogView";

export default function Page({ params }) {
  const paramsID = params.slug;
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Make the Axios API call
        const response = await axios.get(
          `https://cpapi.rajneesh.site/api/v1/admin/blog/${paramsID}`
        );

        // Update the state with the fetched data
        setData(response.data);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, [params]); // Empty dependency array ensures the effect runs only once (on mount)
  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = dateObject.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <NavbarHeader />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "200px", background: "#dae3e2" }}
      >
        <h1 className="text-dark text-center ">Blog</h1>
      </div>

      {data ? (
        <div style={{ background: "#e8e8e6" }}>
          <div className="container py-3">
            <h3 className="">{data.title}</h3>

            <img
              className="img-fluid"
              src={`https://cpapi.rajneesh.site/${data.img}`}
              alt="blog-img"
            />
            <div className="d-flex justify-content-between align-items-center">
              <p className="my-3 blog-title">
                <IoPencilOutline className="me-2" />
                {data.author}
              </p>
              <p className="my-3">
                <MdOutlineDateRange className="mx-2" />
                {formatDate(data.createdAt)}
              </p>
            </div>
            <div
              className=" my-4"
              dangerouslySetInnerHTML={{ __html: data.contant }}
            ></div>
          </div>
        </div>
      ) : (
        <SkeletonBlogView />
      )}
      <Footer />
    </>
  );
}
