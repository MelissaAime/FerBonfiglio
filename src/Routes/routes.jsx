import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../Components/Navbar/navbar';
import { Home } from '../Home/Home';


export const MyRoutes = () => {
  return (
    <BrowserRouter> 
        <NavBar/>

        <Routes>
            <Route path='/' element={ <Home/> } />
        </Routes>
    </BrowserRouter> 
  );
}
