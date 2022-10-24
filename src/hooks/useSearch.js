import { useLocation } from "react-router-dom"

export const useSearch=()=>{

 let location = useLocation()
 return new URLSearchParams(location.search)

 
}