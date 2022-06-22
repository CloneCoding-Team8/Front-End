import '../../App.css';
import styled from 'styled-components'
import Search from "../../image/search.svg"
import Cart from "../../image/cart.svg"

function SearchBar() {
  return (
    <>
        <SearchBarWrap>
            <Barsearch>상품, 브랜드 검색<img src = {Search}/></Barsearch>
            <img src = {Cart}/>
        </SearchBarWrap>
    </>
    )
}

const Barsearch = styled.div`
    width: 180px;
    height: 20px;
    font-size: 13px;
    border-radius: 20px;
    padding: 9px;
    color:#9E9E9E;
    background-color: #EEEEEE;
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

const SearchBarWrap = styled.div`
    /* border: 1px solid black; */
    width: 240px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

export default SearchBar