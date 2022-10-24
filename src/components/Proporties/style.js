import styled from 'styled-components';

const Container = styled.div`
 /* display: flex;
 flex-wrap: wrap;
 padding: 20px 130px;
 max-width: 1440px;
 width: 100%;
 justify-content: space-between; */
 display: grid;
 grid-auto-flow: row;
 padding: 20px 130px;
 max-width: 1440px;
 width: 100%;
 grid-gap: 20px;
 grid-template-columns: repeat(auto-fit,minmax(330px,1fr));
`


export {Container}