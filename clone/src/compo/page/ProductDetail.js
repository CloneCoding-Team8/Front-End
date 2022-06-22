import styled from 'styled-components'
import { Routes, Route, useNavigate } from "react-router-dom";



function ProductDetail () {

    const navigate = useNavigate();

    return (
        <>
        <ProductDetailWrap>
        <ProductDetailLeftWrap>
            <ProductPic>
                여기에 제품 사진이 들어갑니다
            </ProductPic>
            <ProductPicDetailWrap>

            </ProductPicDetailWrap>
        </ProductDetailLeftWrap>
        <ProductDetailRightWrap>
            <DetailTitle>여기에 제품명이 들어갑니다</DetailTitle>
            <DetailMiniTitle>여기에 부제목이 들어갑니다</DetailMiniTitle>
            <DetilPrice>여기에 가격 정보가 들어갑니다</DetilPrice>
            <DetailMiniTitle>여기엔 별점이 들어갑니다</DetailMiniTitle>
            <DetailPoint>무료배송</DetailPoint>
            <DetailPoint>134 구매</DetailPoint>
            <DetailPoint>70원 적립</DetailPoint>
            <DetailPoint>
                <DetailPointSelectBox style={{width:"460px", padding:"10px", outline:"none"}}>
                    <option value="first">옵션 : 가격 : 재고</option>
                    <option vlaue="second">1+1 : 가격 + 가격 : 재고</option>
                    <option value="third">1+2 : 가격+가격+가격 : 재고</option>
                    <option value="third">1+2 : 가격+가격+가격 : 재고</option>
                </DetailPointSelectBox>
            </DetailPoint>
            <DetilButtonWrap>
                <DetailButton onClick={() => {navigate(`/basket`)}}>장바구니</DetailButton>
                <DetailButton2>바로구매</DetailButton2>
            </DetilButtonWrap>
        </ProductDetailRightWrap>
        </ProductDetailWrap>
        </>
        )
}


const ProductDetailWrap = styled.div`
    /* border: 1px solid black; */
    width: auto;
    height: 800px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;
`

const ProductDetailLeftWrap = styled.div`
    /* border: 1px solid black; */
    width: 600px;
    height: 700px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const ProductPic = styled.div`
    /* border: 1px solid black; */
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
`

const ProductPicDetailWrap = styled.div`
    /* border: 1px solid black; */
    width: 450px;
    height: 100px;
`

const ProductDetailRightWrap = styled.div`
    /* border: 1px solid black; */
    width: 600px;
    height: 700px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const DetailTitle = styled.div`
    /* border: 1px solid black; */
    width: 550px;
    height: 100px;
    font-size: 40px;
    padding-left: 20px;
    padding-top: 10px;
`

const DetailMiniTitle = styled.div`
    /* border: 1px solid black; */
    width: 550px;
    height: 40px;
    font-size: 16px;
    padding-left: 20px;
    margin-bottom: 20px;
`

const DetilPrice = styled.div`
    /* border: 1px solid black; */
    width: 550px;
    height: 80px;
    font-size: 30px;
    font-weight: bold;
    padding-left: 20px;
`

const DetailPoint = styled.div`
    font-size: 17px;
    border-top: 1px solid #97999B;
    width: 460px;
    padding-top: 15px;
    padding-bottom: 15px;
`

const DetailPointSelectBox = styled.select`
    /* border-top: 1px solid #97999B; */
    width: 460px;
    padding-top: 15px;
    padding-bottom: 15px;

`

const DetilButtonWrap = styled.div`
    /* border: 1px solid black; */
    margin-top: 30px;
    width: 460px;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`   

const DetailButton = styled.button`
    width: 175px;
    height: 70px;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid #6CC24A;
    outline: none;
    color: #6CC24A;
    background-color: transparent;
    cursor: pointer;
`

const DetailButton2 = styled.button`
    width: 275px;
    height: 70px;
    padding: 10px;
    font-size: 20px;
    outline: none;
    background-color: #6CC24A;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
`

export default ProductDetail