import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import List from "../components/List"
import { projectFirestore } from "../firebase/config"

const Recipe = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()
  
  useEffect(()=>{
    setIsLoading(true)
    projectFirestore.collection('recipes').doc(id).get().then(snapshot => {
      if (!snapshot.exists) {
        setError('No such recipy')
        setIsLoading(false)
      } else {
        setIsLoading(false)
        setData(snapshot.data())
      }
    }).catch(error=>{
      setIsLoading(false)
      setError(error)
    })
  }, [id])

  // Json-server fetch
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(`http://localhost:3000/recipies/${id}`)
  //     setData(res.data)
 
  //   }
  //   getData()
  // }, [id])

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <List recipies={[data]} />}
    </div>
  )
}

export default Recipe