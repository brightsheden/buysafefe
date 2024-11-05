import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './state/store.js';
import StickyNavbar from './components/AppBar.jsx';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <QueryClientProvider client={queryClient}>
   <App/>

    </QueryClientProvider>
    {/*<StickyNavbar/>*/}
 
   </Provider>
   
  
       
    

  </React.StrictMode>,

);
