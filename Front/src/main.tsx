
import { App } from 'src/app/App'
import { ThemeProvider } from './app/provider/Themeprovider'

import ReactDOM from 'react-dom/client'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>

    
)
