
import styled from "styled-components"
import { Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config"

const List = ({ recipies }) => {

  const deleteHandler = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <Grid>
      {recipies.map(e => {
        return (
          <Card key={e.id}>
            <LinkStyled to={`/recipies/${e.id}`}>{e.title}</LinkStyled>
            <p>{e.cookingTime}</p>
            <button onClick={() => deleteHandler(e.id)} >Delete</button>
          </Card>
        )
      })}
    </Grid>
  )
}

const LinkStyled = styled(Link)`

`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  justify-content: center;
  gap: 34px;
`

const Card = styled.div`
  width: 400px;
  height: 200px;
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.1);
`

export default List