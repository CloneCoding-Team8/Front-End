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
                    <ImageWrap ><img src = {add1} style={{}}/></ImageWrap>
                    <ImageWrap ><img src = {add2} style={{}}/></ImageWrap>
                    <ImageWrap ><img src = {add3} style={{}}/></ImageWrap>
                    <ImageWrap ><img src = {add4} style={{}}/></ImageWrap>
            </AddDivider>
        </Addbar>
    </>
    )
}

const AddDivider = styled.div`
    /* border:1px solid black; */
    height: 500px;
    width: 1200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
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

const ImageWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    
`


export default AddForm