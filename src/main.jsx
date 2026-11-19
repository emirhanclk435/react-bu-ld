
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'


const client=new QueryClient();
createRoot(document.getElementById('root')).render(
   
    <QueryClientProvider client={client}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </QueryClientProvider>

)
