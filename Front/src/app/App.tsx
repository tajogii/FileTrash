

import { MyButton } from "shared/ui/MyButton/MyButton"
import { Themeprovider } from "./Themeprovider/Themeprovider"



export const App = () => {

    return (
        <Themeprovider>
            <div>
                <MyButton type={"default"} text={"Test"}/>
            </div>
        </Themeprovider>
        
   
    )
}

