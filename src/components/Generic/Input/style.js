import styled from 'styled-components';


const getType = (x)=>{
  
  switch(x){
    case "dark":
      return {
        color:"#fff",
        background:"transparent",
        border:"1px solid #fff"
      }
     case "light":
      return{
        color:"#0D263B",
        background:"#fff",
        border:"1px solid #0D263B"
      } 
     case "primary":
      return{
        color:"#FFF",
        background:"#0061DF",
        border:"none"
      } 
      default:
      return{
        color:"#0D263B",
        background:"#fff",
        border:"1px solid #0D263B"
      } 
  }
}

export const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({height})=>height ? `${height}px` :"44px" };
  width: ${({width})=>width ? `${width}px` :"100%" };
/* ${({type})=> getType(type)}; */
  user-select:none;
  line-height:20px; 
  font-size:14px;
  outline:none;
  border:1px solid #E6E9EC;
`