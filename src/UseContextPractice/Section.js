import { useContext } from "react"
import LevelContext from "./LevelContext"



export default function Section({children}) {
    const level = useContext(LevelContext);

    return (
        <LevelContext.Provider value={level+1}>
            <section style={{"border": '1px solid red' }}>
                {children}
            </section>
        </LevelContext.Provider>
    )

}