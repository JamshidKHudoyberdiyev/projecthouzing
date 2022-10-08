import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: var(--bgColor);
  color: #fff;
  padding: 0 130px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
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