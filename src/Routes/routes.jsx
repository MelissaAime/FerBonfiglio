import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/navbar';
import { Home } from '../Home/Home';


export const MyRoutes = () => {
  return (
    <BrowserRouter> 
        <Navbar/>

        <Routes>
            <Route path='/' element={ <Home/> } />
        </Routes>
    </BrowserRouter> 
  );
}
