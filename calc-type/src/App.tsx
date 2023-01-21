import './App.css';
import Home from './components/home';
import { GlobalStyle } from './components/styles/root';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>  

    <div className="App">
    <GlobalStyle/>
      <Home></Home>
      <ToastContainer />
    </div>
    
    </>
  );
}

export default App;
