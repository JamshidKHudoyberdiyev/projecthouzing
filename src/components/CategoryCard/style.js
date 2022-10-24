import styled from 'styled-components';
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as love } from '../../assets/icons/love.svg';
import { ReactComponent as resize } from '../../assets/icons/ruler.svg';

const Container = styled.div`
 width: 100%;
  max-width: 280px;
  min-width: 250px;
 
  position: relative;
  margin: ${({ gap }) => {
    return gap && `0 ${gap}px`;
  }};
  
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  
  
`;

const Content = styled.div`
  display: flex;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
/* identical to box height, or 156% */


color: #FFFFFF;

`;
const Blur  = styled.div`
position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: rgba(0,0,0,0.5);
`



const Icons = styled.div``;




export { Container, Img, Content,Icons,Blur };
