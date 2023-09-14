import { useContext } from "react"
import MyContext from "../state/MyContext"


const  Charlie = () =>{

    const{dispatch} = useContext(MyContext)

    const increase = () => dispatch({type: "INCREASE"})


    return(

        <div>
            <h2>Charlie</h2>
             <button onClick={increase}>+1</button>
        </div>
    )
}
export default Charlie