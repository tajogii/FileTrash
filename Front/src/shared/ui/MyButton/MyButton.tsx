import { Button, ButtonProps } from 'antd';


interface IMyButton extends ButtonProps{
    text: string
}


export const MyButton = (props:IMyButton) => {
    
    const {text , ...other}=props

    return(
        <Button {...other} > {text}</Button>
    
    )
}
    
    
