import { Button, ButtonProps } from 'antd';


interface MyButtonProps extends ButtonProps{
    text: string
}


export const MyButton = (props:MyButtonProps) => {
    
    const {text , ...other}=props

    return(
        <Button {...other} > {text}</Button>
    
    )
}
    
    
