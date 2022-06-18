import "../../App.css"
import styled from "styled-components"
import add1 from "../../image/add1.png"
import add2 from "../../image/add2.png"
import add3 from "../../image/add3.png"
import add4 from "../../image/add4.png"


function AddForm() {
  return (
    <>
        <Addbar>
            <AddDivider>
                <div>
                    <img src = {add1}/>
                    <img src = {add2} style={{display:'none'}}/>
                    <img src = {add3} style={{display:'none'}}/>
                    <img src = {add4} style={{display:'none'}}/>
                </div>
            </AddDivider>
        </Addbar>
    </>
    )
}

const AddDivider = styled.div`
    /* border:1px solid black; */
    height: 500px;
    width: 200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const Addbar = styled.div`
    /* border:1px solid black; */
    height: 500px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;


export default AddForm