"use client"
import axios from "axios";
import React,{useEffect,useState,createContext,useContext} from 'react'
const Context = createContext()
function ApiCall({children}) {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://cpapi.rajneesh.site/api/v1/admin/get-blog`
          );
  
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []); 
  


  return (
    <Context.Provider value={{data}}>{children}</Context.Provider>
  )
}
export const DataStore = () => useContext(Context)
export default ApiCall