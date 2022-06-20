import styled from 'styled-components'
import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";



function ShoppingBasket () {

    const navigate = useNavigate();

    const [Counter, setCounter] = React.useState(1)

    const onIncrease = () => {
        setCounter(prevCount => prevCount +1)
    }

    const onDecrease = () => {
        setCounter(prevCount => prevCount -1)
    }


    return (
        <>
        <ShoppingBasketlWrap>
            <BasketTopWrap>
                <BasketTitle>장바구니</BasketTitle>
                <span>01 장바구니 > 02 주문서작성/결제 > 03 주문완료 </span>
            </BasketTopWrap>
            <BasketDetail>
                <BasketCatalogWrap>
                    <BasketCatalogTop>  
                        <BasketCatalogTopInfoTop>상품/옵션정보</BasketCatalogTopInfoTop>
                        <BasketCatalogTopInfo>수량</BasketCatalogTopInfo>
                        <BasketCatalogTopInfo>상품금액</BasketCatalogTopInfo>
                        <BasketCatalogTopInfo>합계금액</BasketCatalogTopInfo>
                        <BasketCatalogTopInfo>삭제</BasketCatalogTopInfo>
                    </BasketCatalogTop>
                    <BasketCatalogMid>
                        <BasketCatalogTopInfo1>
                            <BasketCatalogPic></BasketCatalogPic>상품/옵션정보
                        </BasketCatalogTopInfo1>
                        <BasketCatalogCounter>
                            {Counter}
                            <div>
                            <CounterBtn onClick={onDecrease}>-</CounterBtn>
                            <CounterBtn onClick={onIncrease}>+</CounterBtn>
                            </div>
                        </BasketCatalogCounter>
                        <BasketCatalogTopInfoBot>상품금액</BasketCatalogTopInfoBot>
                        <BasketCatalogTopInfoBot>합계금액</BasketCatalogTopInfoBot>
                        <BasketCatalogTopInfoBot>
                            <DeleteBtn>삭제</DeleteBtn>
                        </BasketCatalogTopInfoBot>
                    </BasketCatalogMid>
                </BasketCatalogWrap>
                <GotoHome onClick={() => {navigate(`/`)}}> 쇼핑계속하기 </GotoHome>
                <BasketTotalPriceWrap>
                    <PriceInfo>
                        <Price1>총 1개의 상품 금액</Price1>
                        <Price2>15,000원</Price2>
                    </PriceInfo>
                    <PlusDiv>+</PlusDiv>
                    <PriceInfo>
                        <Price1>배송비</Price1>
                        <Price2>0원</Price2>
                    </PriceInfo>
                    <EqaulDiv>=</EqaulDiv>
                    <PriceInfo>
                        <Price1>합계</Price1>
                        <Price2>15,000원</Price2>
                    </PriceInfo>
                </BasketTotalPriceWrap>
                <BtnWrap><BuyBtn>상품 주문하기</BuyBtn></BtnWrap>
                
            </BasketDetail>
        </ShoppingBasketlWrap>
        </>
        )
}


const ShoppingBasketlWrap = styled.div`
    /* border: 1px solid black; */
    width: auto;
    height: 800px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;
`

const BasketTopWrap = styled.div`
    /* border: 1px solid black; */
    border-bottom: 1px solid #D0D0CE;
    width: 1100px;
    height: 70px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    margin-bottom: 30px;
`

const BasketTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
`

const BasketDetail = styled.div`
    /* border: 1px solid black; */
    width: 1100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const BasketCatalogWrap = styled.div`
    /* border: 1px solid black; */
    width: 1100px;
    height: 400px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const BasketCatalogTop = styled.div`
    border-top: 1px solid black;
    border-bottom: 1px solid #D9D9D6;
    width: 1100px;
    height: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: Gainsboro;
`

const BasketCatalogTopInfoTop = styled.div`
    /* border: 1px solid black; */
    font-size: 16px;
    font-weight: bold;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BasketCatalogPic = styled.div`
    border: 1px solid black;
    width: 250px;
    height: 250px;
    margin-right: 20px;
    margin-left: 40px;
`

const BasketCatalogTopInfo1 = styled.div`
    font-size: 16px;
    font-weight: bold;
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const BasketCatalogTopInfo = styled.div`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;
    width: 60px;

`

const BasketCatalogTopInfoBot = styled.div`
    font-size: 16px;
    font-weight: bold;
    border-left: 1px solid Gainsboro;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;
    width: 60px;
`

const BasketCatalogMid = styled.div`
    width: 1100px;
    height: 300px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid Gainsboro;
`

const GotoHome = styled.span`
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 40px;
    margin-left: 20px;
    cursor: pointer;
`

const BasketTotalPriceWrap = styled.div`
    border: 3px solid gainsboro;
    width: 1095px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
`

const PriceInfo = styled.div`
    /* border: 1px solid black; */
    width: 140px;
    height: 90px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
    margin-right: 30px;
`

const PlusDiv = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    background-color: #8A8D8F;
    margin-left: 20px;
    margin-right: 20px;
    color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    font-size: 26px;
    font-weight: bold;
`

const EqaulDiv = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    background-color: #00AB84;
    margin-left: 30px;
    margin-right: 20px;
    color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    font-size: 26px;
    font-weight: bold;
    `

const Price1 = styled.span`
    font-size: 18px;
    font-weight: bold;
`

const Price2 = styled.span`
    margin-top: 10px;
    font-size: 19px;
    font-weight: bold;
    color: #00AB84;
`

const BuyBtn = styled.button`
    width: 200px;
    height: 60px;
    font-size: 18px;
    font-weight: bold;
    background-color: #00B140;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    margin-top: 30px;
`

const BtnWrap = styled.div`
    display: flex;
    margin-top: 10px;
    width: 1100px;
    justify-content: flex-end;
    align-items: flex-end;
`

const BasketCatalogCounter = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border-left: 1px solid Gainsboro;
    height: 300px;
    padding-right: 30px;
    padding-left: 30px;
    width: 60px;
`

const CounterBtn = styled.button`
    border: none;
    outline: none;
    margin: 5px;
    width: 20px;
    height: 20px;
    color: white;
    font-size: 16px;
    background-color: #00B140;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
`

const DeleteBtn = styled.button`
    width: 40px;
    padding: 5px;
    font-size: 14px;
    background-color: #00B140;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
`

export default ShoppingBasket