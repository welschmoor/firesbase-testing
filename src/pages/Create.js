



const Create = () => {


  return (
    <div>
      <form>
        <label>
          Recipe Title:
          <input type="text" required />
        </label>
        <label>
          Cooking Time (minutes):
          <input type="number" required />
        </label>
      </form>
    </div>
  )
}

export default Create