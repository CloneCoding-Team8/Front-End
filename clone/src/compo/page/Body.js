import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import React from 'react'


function Body () {

    const dispatch = useDispatch();

    const productLists = useSelector((state) => state.catalog.list.content);

    return(
    <div>
    {productLists.map((list, idx) => {
        return (
            <Catalog key={idx}>
                <CatalogWrap>
                    <CatalogWrapTop>
                        <CatalogPic>
                            상품 사진이 들어갑니다.
                        </CatalogPic>
                    </CatalogWrapTop>
                    <CatalogWrapBot>
                        <CatalogTitle>상품명이 들어갑니다.</CatalogTitle>
                        <div>
                            <CatalogPrice>61% 49800원</CatalogPrice>
                            <div>별 4.5(36)</div>
                            <div>무료배송</div>
                        </div>
                    </CatalogWrapBot>
                </CatalogWrap>
            </Catalog>
                )
            })}
    </div>
    )
}

const Catalog = styled.div`
    /* border: 1px solid black; */
`

const CatalogWrap = styled.div`
    border: 1px solid black;
    width: 390px;
    height: 600px;;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const CatalogWrapTop = styled.div`
    border: 1px solid black;
    width: 380px;
    height: 380px;;
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
    border: 1px solid black;
    width: 380px;
    height: 200px;;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

const CatalogTitle = styled.div`
    /* font-weight: bold; */
    font-size: 17px;
    margin-top: 15px;
`

const CatalogPrice = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
`

export default Body



