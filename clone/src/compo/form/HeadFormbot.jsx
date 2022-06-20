import '../../App.css';
import styled from 'styled-components'
import Headbtn from "../elemen/Headbtn"
import HeadbtnLong from "../elemen/HeadbtnLong"
import SearchBar from "../elemen/SearchBar"
import Logo from "../../image/logo_rcp.png"


function HeadFormbot(props) {

  return (
    <>
        <HeadBack>
            <div>
                <HeadbtnLong />
            </div>
            <Headbtn />
            <Imgbtn><img src={Logo} /></Imgbtn>
            <div style={{marginLeft:'60px'}}>
                <SearchBar/>
            </div>
        </HeadBack>
    </>
    )
}

const HeadBack = styled.div`
    /* border:1px solid black; */
    border-bottom: 1px solid #B0BEC5;
    width: 1450px;
    height: 70px;
    background-color:transparent;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

const Imgbtn = styled.div`
    cursor: pointer;
    margin-left:20px;
`

export default HeadFormbot