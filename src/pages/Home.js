import React, { useEffect, useState } from "react";
import axios from "axios";


import List from "../components/List";

const Home = () => {
  const [recipies, setRecipies] = useState([])
  const url = `http://localhost:3000/recipies`



  useEffect(() => {
    console.log('Running')
    const getData = async () => {
      const data = await axios.get(url)
      setRecipies(data.data)
    }
    getData()

  }, [])


  return (
    <>
      <div>Home</div>
      {recipies && <List recipies={recipies} />}
    </>
  )
}

export default Home