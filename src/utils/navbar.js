import Home from "../components/Home"
import Proporties from "../components/Proporties"
import useId from "../hooks/useId"


export const navbar = 
[
    {   id:useId,
        title:"Home",
        path:'/home',
        private:false,
        hidden:false,
        element:<Home/>
    },
    {   id:useId,
        title:"Proporties",
        path:'/proporties',
        private:false,
        hidden:false,
        element:<Proporties/>
    },
    {   id:useId,
        title:"Sign in",
        path:'/signin',
        private:false,
        hidden:true,
        element:<h1>Sign in</h1>
    }
]