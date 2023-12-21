
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { Accessories } from './Pages/Accessories';
import { Laptop } from './Pages/Laptop';
import { Printers } from './Pages/Printers';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/laptop' element={<Laptop category='laptop'/>}/>
        <Route path='/printer' element={<Printers category='printer'/>}/>
        <Route path='/ass' element={<Accessories category='ass'/>}/> 
         
       
        <Route path='/login' element={<LoginSignup/>}/>     
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
