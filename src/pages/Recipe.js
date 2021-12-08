import { useParams } from "react-router-dom"


const Recipe = () => {
  const { id } = useParams()
  return(
    <div>
      {id}
    </div>
  )
}

export default Recipe