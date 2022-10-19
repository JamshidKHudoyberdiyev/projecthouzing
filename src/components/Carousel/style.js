import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';
const Container = styled.div`
 position: relative;
 /* height: 571px; */
`;


const Img =styled.img`
 width: 100%;
 /* height: 571px; */
`;
const Arrow = styled(arrow)`
height: 50px;
width: 50px;
border-radius: 50%;
position: absolute;
top: 50%;
transform: ${({chap})=>(chap ? "rotate(0deg)":"rotate(180deg)")};
left: ${({chap})=>chap && "20px"};
right: ${({chap})=>!chap && "20px"};
bottom: 0;
padding: 18px;
background-color: rgba(0,0,0,0.2);
cursor: pointer;
:hover{
    opacity: 0.7;
}
`;


const Blur = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
`;

const Content =styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const ContentTitle=styled.div`
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 700;
 font-size: 44px;
 line-height: 48px;
 letter-spacing: -0.02em;
 color: #FFFFFF;
`;

const ContentInfo = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`;
export {Container,Img,Arrow,Blur,Content,ContentTitle,ContentInfo}