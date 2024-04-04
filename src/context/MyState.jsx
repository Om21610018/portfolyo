import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      setLoading(false);
      setData(res.data.user);
      // Use res.data to set the data state
      // console.log(res.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyContext.Provider value={{ data, setLoading, loading, getData }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
