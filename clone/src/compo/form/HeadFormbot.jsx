import '../../App.css';
import styled from 'styled-components'
import Headbtn from "../elemen/Headbtn"
import HeadbtnLong from "../elemen/HeadbtnLong"
import SearchBar from "../elemen/SearchBar"
import Logo from "../../image/logo_rcp.png"


function HeadFormbot(props) {

    const Login = props.login

  return (
    <>
        <HeadBack>
            <div>
                <HeadbtnLong />
            </div>
            <Headbtn />
            <div style={{marginLeft:'20px'}}>
                <img src={Logo} />
            </div>
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
    width: auto;
    height: 60px;
    background-color:transparent;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

export default HeadFormbot