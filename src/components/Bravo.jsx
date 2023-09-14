import { useContext } from "react"
import MyContext from "../state/MyContext"


const Bravo = () =>{

let {state} = useContext(MyContext)

    return(
        <div>
            <h2>{state.counter}</h2>
        </div>

    )
}
export default Bravo