import { useContext } from "react";
import { MyContext } from "../globalstate/ContextProvider";
import { Link } from "react-router-dom";



const ChildOne = () => {
    const {greet, setGreet} = useContext(MyContext)


    return (
        <>
            <h1>{greet}</h1>
            <Link to={"./ChildOne"}>
                <button>ChildOne</button>
            </Link>
            
        </>
    )
    }
    export default ChildOne