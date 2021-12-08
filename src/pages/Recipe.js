import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import List from "../components/List"

const Recipe = () => {
  const [data, setData] = useState(null)
  const { id } = useParams()
  console.log(data)
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/recipies/${id}`)
      setData(res.data)
 
    }
    getData()
  }, [id])

  return (
    <div>
      {data && <List recipies={[data]} />}
    </div>
  )
}

export default Recipe