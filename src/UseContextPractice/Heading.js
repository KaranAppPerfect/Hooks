import { useContext } from "react"
import LevelContext from "./LevelContext"

export default function Heading({children}) {

    const level = useContext(LevelContext);    
    switch (level) {
        case 1: return <h1> {children} </h1> ; break;
        case 2 : return <h4>{children}</h4>; break;
        case 3: return <h6>{children}</h6> ; break;
        default: return <p> {children} </p>
            break;
            
    }

}