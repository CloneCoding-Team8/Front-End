import styled from 'styled-components'


function FooterForm () {
    return (
        <>
        <FooterWrap>
            <FooterLeftWrap>
                <CustomerCenter>클론코딩</CustomerCenter>
                <CustomerCallNumber>02-6953-4433</CustomerCallNumber>
                <CustomerCenter>[코딩상담 일시 중단 안내]</CustomerCenter>
                <CustomerCenterTime>평일 09:00 ~ 21:00</CustomerCenterTime>
                <br/>
                <CustomerCenterTime>점심시간 : 12:00 ~ 알아서들</CustomerCenterTime>
                <br/>
                <CustomerCenterTime>공휴일 및 주말도 코딩</CustomerCenterTime>
            </FooterLeftWrap>
            <FooterRightWrap>
                <FooterInfoWrap>
                    <FooterInfoTop>회사소개</FooterInfoTop>
                    <FooterInfoTop>이용약관</FooterInfoTop>
                    <FooterInfoTop>개인정보처리방침</FooterInfoTop>
                    <FooterInfoTop>이용안내</FooterInfoTop>
                    <FooterInfoTop>광고/제휴 문의</FooterInfoTop>
                </FooterInfoWrap>
                <FooterInfoWrap02>
                    <CompanyInfo>(주)하드코딩산업 제3태양계 목성구 여든번째 위성 B-612 145 (으라차차타워3차) 무야호</CompanyInfo><br/>
                    <CompanyInfo>대표 : 약장수 사업자등록번호 : 117-81-44101 통신판매업신고번호 : 2009-목성-0631호 개인정보관리자 : 로컬스토리지</CompanyInfo><br/>
                    <CompanyInfo>대표번호 : 02-323-5002 팩스번호 : 02-323-5049 메일 : helpme.com 호스팅제공 : 아마도(주)로 8조 백엔드</CompanyInfo>
                </FooterInfoWrap02>
                <FooterInfoWrap>
                    <CompanyInfo>㈜B반 8조가 운영하는 천개스토어는 통신판매중개자로서 당연히 거래의 당사자가 절대 아니며,</CompanyInfo><br/>
                    <CompanyInfo>입점 판매자가 등록한 상품정보는 오로지 DB에만 존재하는 가상의 물건 입니다.</CompanyInfo>
                </FooterInfoWrap>
                <FooterInfoWrap>
                  <CompanyInfo>copyright (c) hanghae,Bvan,8jo all rights reserved.</CompanyInfo>
                </FooterInfoWrap>
            </FooterRightWrap>
        </FooterWrap>
        </>
        )
}

const FooterWrap = styled.div`
    /* border: 1px solid black; */
    border-top: 2px solid black;
    width: auto;
    height: 300px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`
const FooterLeftWrap = styled.div`
    /* border: 1px solid black; */
    width: 350px;
    height: 250px;
`
const FooterRightWrap = styled.div`
    /* border: 1px solid black; */
    width: 750px;
    height: 250px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
`

const CustomerCenter = styled.p`
    font-weight: bold;
    font-size: 19px;
`

const CustomerCallNumber = styled.span`
    font-size: 30px;
    font-weight: bolder;
`

const CustomerCenterTime = styled.span`
    font-size: 16px;
    color: #90A4AE;
`

const FooterInfoWrap = styled.div`
    /* border: 1px solid black; */
    width: 700px;
    height: 40px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 10px;
`

const FooterInfoWrap02 = styled.div`
    /* border: 1px solid black; */
    width: 700px;
    height: 70px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 10px;
`

const FooterInfoTop = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 19px;
    font-weight: bold;
    color: #53565A;
    cursor: pointer;
`

const CompanyInfo = styled.span`
    font-size: 14px;
`

export default FooterForm