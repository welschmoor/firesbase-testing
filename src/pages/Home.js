import React, { useEffect, useState } from "react"

import { projectFirestore } from "../firebase/config"

import List from "../components/List";
// const url = `http://localhost:3000/recipies` 

const Home = () => {
  const [recipies, setRecipies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    projectFirestore.collection('recipes').get().then((snapshot) => {
      console.log(snapshot)
      if (snapshot.empty) {
        setError('No recipies')
        isLoading(false)

      } else {
        let result = []
        snapshot.docs.forEach(e => {
          result.push({ id: e.id, ...e.data() })
        })
        console.log(result)
        setRecipies(result)
        setIsLoading(false)
      }
    }).catch(error=> {
      setError(error)
      setIsLoading(false)
    })
  }, [recipies])


  // useEffect(() => {
  //   console.log('Running')
  //   const getData = async () => {
  //     const data = await axios.get(url)
  //     setRecipies(data.data)
  //   }
  //   getData()

  // }, [])


  return (
    <>
      <div>Home</div>
      {error && <div>{error}</div>}
      {!recipies && <div>Loading...</div>}
      {recipies && <List recipies={recipies} />}
    </>
  )
}

export default Home