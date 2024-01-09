"use client";

import NavbarHeader from "./components/NavbarComponents";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Link from "next/link";
import { dataStore } from "@/Storage/ApiCall";

export default function Home() {
  const [height, setHeight] = useState(0);
  const {data}= dataStore()
  const myUrl = (url) => {
    const data = url.split(" ").join("-");
    return data;
  };
  return (
    <>
      <NavbarHeader setHeight={setHeight} />
      <Banner height={height} />
      <div className="blogs-main">
        <div className="row m-0  p-5">
          {data.map((data) => (
            <div className="col-12 col-md-6 col-lg-4 p-4">
              <Link className="text-light text-decoration-none" href={`/blog/${myUrl(data.title)}`}>
                <Card item={data} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
