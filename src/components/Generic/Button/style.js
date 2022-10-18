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
        border:"1px solid #E6E9EC"
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

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({height})=>height ? `${height}px` :"44px" };
  width: ${({width})=>width ? `${width}px` :"130px" };
  ${({type})=> getType(type)};
  cursor: pointer;
  user-select:none;
  line-height:20px; 
  font-size:14px;
  border-radius:2px;
  :active{
    opacity: 0.7
  }
`