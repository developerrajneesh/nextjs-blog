"use client";

import NavbarHeader from "./components/NavbarComponents";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Link from "next/link";
import { DataStore } from "@/app/Storage/ApiCall";

export default function Home() {
  const [height, setHeight] = useState(0);
  const [mapData,setMapData] = useState(null)
  const [filterState, setFilterState] = useState("All");
  const {data}= DataStore()
  const myUrl = (url) => {
    const data = url.split(" ").join("-");
    return data;
  };

  useEffect(() =>{
    if (filterState === "All") {
      setMapData(data)
    }else{
      console.log(2424242);
      const filterData = data.filter(data => data.tags.includes(filterState))
      setMapData(filterData.length == 0 ?null :filterData)
    }
    

  },[filterState,data])


  console.log(mapData,);


  return (
    <>
      <NavbarHeader setHeight={setHeight} />
      <Banner  setFilterState={setFilterState}height={height} />
      <div className="blogs-main">
        <div className="row m-0  p-5">
           {mapData  ? mapData.map((data) => (
            <div className="col-12 col-md-6 col-lg-4 p-4">
              <Link className="text-light text-decoration-none" href={`/blog/${myUrl(data.title)}`}>
                <Card item={data} />
              </Link>
            </div>
          )): <h4 className="text-center">No Data Found...</h4>}
        </div>
      </div>
      <Footer />
    </>
  );
}
