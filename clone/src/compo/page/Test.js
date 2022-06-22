import "../../App.css";
import styled from "styled-components";


function Test() {
  return (
      <Divvv>
        <DiVStyle>
            <div>
            <OneCard>
                <TwoCard/>
                </OneCard>
            </div>
        </DiVStyle>
      </Divvv>
  );
}

const Divvv = styled.div`
    height: 700px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

const DiVStyle = styled.div`
   height: 500px;
    width: 1400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;

`

const OneCard = styled.div`
  //자식
  width: 1200px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 18px 053px 0px rgba(0, 0, 0, 0.7);
  background-color: #25282A;
`

const TwoCard = styled.div`
 width: 1200px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001E60;
  opacity: 50%;

`

export default Test;
