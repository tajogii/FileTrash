import { theme } from "antd"
import ConfigProvider from "antd/es/config-provider"
import { FC } from "react"

interface ThemeproviderProps {
    children?: React.ReactNode
}


export const Themeprovider:FC<ThemeproviderProps>  = ({children}) => {

    return (
        <ConfigProvider 
            theme={{
                algorithm: theme.darkAlgorithm,
            }}>
            {children}
        </ConfigProvider>
   
    )
}

