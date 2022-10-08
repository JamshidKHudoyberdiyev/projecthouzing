import { useId } from "react";

export const useUniquid =()=>{
 const id = useId() 
    return id
}

export default useUniquid