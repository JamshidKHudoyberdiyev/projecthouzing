import styled from 'styled-components';
import {ReactComponent as house} from '../../assets/icons/FilterHome.svg'
import {ReactComponent as advanced} from '../../assets/icons/AdvancedIcon.svg'
import {ReactComponent as search} from '../../assets/icons/SearchIcon.svg'




export const Container = styled.div`
display: flex;
gap: 20px;
padding: 0 130px;
`

export const Icon =styled.div``;

Icon.House=styled(house)`
 margin-right:10px ;
`;
Icon.Advanced=styled(advanced)`
 margin-right:10px;
`

Icon.Search=styled(search)` 
 margin-right:10px ;
 `;


export const ContentContainer = styled.div`
 display:flex;
 flex-direction: column;
 padding:30px;
 box-sizing:border-box;
 border-radius: 5px;
 max-width: 920px;
 width: 100%;
 height: 410px;

`;

export const FragmentTitle = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color:#000;
margin-bottom: 10px;
`;

export const Fragment = styled.div`
 display:flex;
 gap:20px;
 margin-bottom: 20px;
`

