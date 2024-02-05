import { MyButton } from "src/shared/ui/MyButton/MyButton"
import { useTheme } from "./provider/Themeprovider"




export const App = () => {

    const {toggleTheme} = useTheme()

    return (

        <div>
            <MyButton type={"default"} text={"Test"} onClick={toggleTheme}/>
        </div>
        
   
    )
}

