import React, { useEffect } from 'react'

import "../../App.css"
import styled from "styled-components"
import add1 from "../../image/add1.png"
import add2 from "../../image/add2.png"
import add3 from "../../image/add3.png"
import add4 from "../../image/add4.png"


function AddForm() {
    const [bannerState, setBannerState] = React.useState(1);
    // const Add_count = Array.from({length: count}, (v, i) => i);  
    
    React.useEffect(() => {
        setTimeout(() => {setBannerState(bannerState === 1 ? 4 : bannerState - 1)}, 4000)
    })

  return (
    <Addbar >
        <AddDivider >
            <div>
            <ImageWrap  className="ImgAnimation" style={{ display: bannerState === 1 ? "" : "none" }}></ImageWrap>
            <ImageWrap2 className="ImgAnimation" style={{ display: bannerState === 2 ? "" : "none" }}></ImageWrap2>
            <ImageWrap3 className="ImgAnimation" style={{ display: bannerState === 3 ? "" : "none" }}></ImageWrap3>
            <ImageWrap4 className="ImgAnimation" style={{ display: bannerState === 4 ? "" : "none" }}/>
            </div>
        </AddDivider>
    </Addbar>
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
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

const ImageWrap = styled.div`
  /* border: 1px solid black; */
  width: 1200px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${add1});
`;

const ImageWrap2 = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${add2});
`

const ImageWrap3 = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${add3});
`

const ImageWrap4 = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${add4});
`

export default AddForm