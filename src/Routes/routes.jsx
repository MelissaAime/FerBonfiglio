import { BrowserRouter } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../Components/Navbar/navbar';
import { Home } from '../Sections/Home/Home';
import { Body } from '../Sections/Body/Body';
import { Projects } from '../Sections/Projects/Projects';
import { Contact } from '../Sections/Contact/Contact';
import { Footer } from '../Sections/Footer/Footer';


export const MyRoutes = () => {
  return (
    <BrowserRouter> 
        <NavBar/>
        <Home/>
        <Body/>
        <Projects/>
        <Contact/>
        <Footer/>

        {/* <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/presentation' element={ <Body/> } />
        </Routes> */}
    </BrowserRouter> 
  );
}
