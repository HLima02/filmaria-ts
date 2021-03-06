import Routes from './routes';
import { CreateGlobalStyle } from './GlobalStyle';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App(){
  return(
    <div>
      <Routes/>
      <CreateGlobalStyle/>
      <ToastContainer autoClose={3000} />
    </div>
  );
}