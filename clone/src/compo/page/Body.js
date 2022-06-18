import styled from 'styled-components'

function Body () {
    return(
    <div>
        <Catalog>
            <CatalogWrap>
                <CatalogWrapTop>
                    <CatalogPic>
                        상품 사진이 들어갑니다.
                    </CatalogPic>
                </CatalogWrapTop>
                <CatalogWrapBot>
                    <div>[만개특가]무무스 와이드 플랫팬 33cm 캠핑용 가정용 와이드팬</div>
                    <div>61% 49800원</div>
                    <div>별 4.5(36)</div>
                    <div>무료배송</div>
                </CatalogWrapBot>
            </CatalogWrap>
        </Catalog>
    </div>)
}

const Catalog = styled.div`
    /* border: 1px solid black; */
`

const CatalogWrap = styled.div`
    /* border: 1px solid black; */
    width: 370px;
    height: 600px;;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const CatalogWrapTop = styled.div`
    /* border: 1px solid black; */
    width: 370px;
    height: 350px;;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const CatalogPic = styled.div`
    border: 1px solid black;
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #607D8B;
`

const CatalogWrapBot = styled.div`
    /* border: 1px solid black; */
    width: 370px;
    height: 200px;;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

const CatalogTitle = styled.div`

`

export default Body