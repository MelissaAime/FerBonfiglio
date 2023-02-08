import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../Components/Navbar/navbar';
import { Home } from '../Sections/Home/Home';
import { Body } from '../Sections/Body/Body';


export const MyRoutes = () => {
  return (
    <BrowserRouter> 
        <NavBar/>
        <Home/>
        <Body/>

        {/* <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/presentation' element={ <Body/> } />
        </Routes> */}
    </BrowserRouter> 
  );
}
