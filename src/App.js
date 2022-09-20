import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects';
import Project from './components/pages/Project'


function App() {
  return (
    <div>
        <Router>
          <Navbar/>
          <Container customClass="min-height">
          <Routes>
            <Route path='/' exact='' element={<Home/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/company' element={<Company/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/newproject' element={<NewProject/>}></Route>
            <Route path='/project/:id' element={<Project/>}></Route>
          </Routes>
          </Container>
        </Router>
        <Footer/>

    </div>
  );
}

export default App;