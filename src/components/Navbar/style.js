import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
`;
export const Main = styled.div`
 background-color: var(--bgColor);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  color:#fff;
  box-sizing: border-box;
  padding: 0 130px;
  max-width: 1440px;
  width: 100%;
  align-items: center;
`;

export const Section = styled.div`
 cursor: ${({logo})=>logo && "pointer"};
 .active{
   color: red;
 }
`

export const Logo = styled.img`

`;

export const Link = styled(NavLink)`
 font-family: 'Montserrat';
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 24px;
 color:#fff;
 padding: 0 32px;
 text-decoration: none;
`