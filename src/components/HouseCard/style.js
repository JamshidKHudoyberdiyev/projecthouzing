import styled from 'styled-components';
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as car} from '../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as resize } from '../../assets/icons/1.svg';
import { ReactComponent as heart } from '../../assets/icons/3.svg';


export const Card = styled.div`
 margin-right:${props=>props.mr}px;
 margin-top:${props=>props.mt}px;
 margin-left:${props=>props.ml}px;
 margin-bottom:${props=>props.mb}px;
 transition: all 0.2s ease;
 /* height: 429px; */
 min-width: 250px;
 width: 380px;
 border-radius: 3px;
 border: 1px solid #E6E9EC;
 :hover{
  box-shadow: 2px 2px 10px 2px #E6E9EC;
  transform: scale(1.0095);
 }
`;



export const Card_img = styled.div`
 width: 100%;
`;

export const Card_info = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

export const Info =styled.div`

`;

Info.Header =styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
 padding: 20px 20px 0 ;
`

Info.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0D263B;
  /* display: flex;
  flex-direction: column; */
`;

Info.Text = styled.div`
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 20px;
 color: #696969;
`;

export const Rooms =styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding:0 20px;
`;

Rooms.Item=styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

Rooms.Info = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;


//! Icons
export const Icon = styled.div`


`;
Icon.bed = styled(bed)`

`;
Icon.bath = styled(bath)`

`;
Icon.car = styled(car)`

`;
Icon.ruler = styled(ruler)`

`;

Icon.resize = styled(resize)`

`;
Icon.heart = styled(heart )`

`;

Info.Footer =styled.div`
 display: flex; 
 
 justify-content: space-between;
 align-items: center;
 border-top: 1px solid #E6E9EC ;
 padding-top: 8px;
 padding: 8px 20px  8px  0;
`;

// price
export const Price = styled.div`
 display: flex;
 flex-direction: column;
 padding-left: 20px;
`;

Price.Old = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-decoration: line-through;
`;

Price.Next = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
`;

Info.Footer.Icons = styled.div`
 display: flex;
 gap: 20px;
 align-items: center;
 justify-content: center;
 
`;




