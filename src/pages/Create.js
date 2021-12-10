
import { useNavigate } from "react-router-dom"
import {projectFirestore} from "../firebase/config"

const Create = () => {
  const navigate = useNavigate() 

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.elements.title.value, `${e.target.elements.time.value} minutes`)
    const newRecipe = {
      title: e.target.elements.title.value,
      cookingTime: `${e.target.elements.time.value} minutes`,     
    }
    projectFirestore.collection('recipes').add(newRecipe).then(res=>{
      navigate('/')

    }).catch(error=>console.log(error))
  }


  return (
    <div>
      <form onSubmit={submitHandler} >
        <label>
          Recipe Title:
          <input type="text" required name="title" />
        </label>
        <label>
          Cooking Time (minutes):
          <input type="number" required name="time" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create