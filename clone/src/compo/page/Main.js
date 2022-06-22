import styled from 'styled-components'

import AddForm from "../form/AddForm"
import Body from "./Body"

function Main() {

    return(
        <>
        <AddForm/>
        <SpeacialSale><span>NOW 특가상품</span></SpeacialSale>
        <Body></Body>
        </>
    )
}


const SpeacialSale = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 80px;
  margin-bottom: 60px;
`

export default Main