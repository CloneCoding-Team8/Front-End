import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import Prev from "../../image/left_icon.svg"
import Next from "../../image/right_icon.svg"



function Body() {
  const dispatch = useDispatch();

  const productLists = Array.from({ length: 3 }, (v, i) => i);

  return (
    <div>
      <Catalog>
          <Left><img src={Prev} /></Left>
        {productLists.map((list, idx) => {
          return (
            <CatalogWrap key={idx}>
                <CatalogPic>상품 사진이 들어갑니다.</CatalogPic>
              <CatalogWrapBot>
                <CatalogTitle>상품명이 들어갑니다.</CatalogTitle>
                <div>
                  <CatalogPrice>61% 49,800원</CatalogPrice>
                  <CatalogStar>⭐ 4.5(36)</CatalogStar>
                  <CatalogDelive>무료배송</CatalogDelive>
                </div>
              </CatalogWrapBot>
            </CatalogWrap>
          );
        })}
        <Right><img src={Next}/></Right>
      </Catalog>
    </div>
  );
}

const Catalog = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 120px;
`

const Left = styled.div`
    /* border: 1px solid black; */
    height: 600px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Right = styled.div`
    /* border: 1px solid black; */
    height: 600px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


const CatalogWrap = styled.div`
    /* border: 1px solid black; */
    height: 600px;;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const CatalogPic = styled.div`
    border: 1px solid black;
    width: 380px;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #607D8B;
`

const CatalogWrapBot = styled.div`
    /* border: 1px solid black; */
    width: 380px;
    height: 200px;;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const CatalogTitle = styled.div`
    /* font-weight: bold; */
    font-size: 30px;
    margin-top: 15px;
    width: 350px;
    /* border: 1px solid black; */
    margin: 10px;
`

const CatalogPrice = styled.div`
    font-weight: bold;
    font-size: 22px;
    margin-top: 10px;
    width: 350px;
    margin: 10px;
    /* border: 1px solid black; */
`

const CatalogStar = styled.div`
    font-size: 17px;
    font-weight: bold;
    width:350px;
    /* border: 1px solid black; */
    margin: 10px;
`

const CatalogDelive = styled.div`
    border: 1px solid #E0E0E0;
    width: 60px;
    padding: 5px;
    text-align: center;
    font-size: 14px;
    margin: 10px;
`


export default Body



