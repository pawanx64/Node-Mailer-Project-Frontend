import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { Product } from './Pages/Product';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Product' element={<Product/>}/>
        </Routes>
    </div>
  );
}

export default App;
