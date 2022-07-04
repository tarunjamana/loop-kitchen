import './App.css';
import Login from './Components/Login';
import Header from './Components/Header/Header';
import {Container} from 'react-bootstrap';

import {Routes ,Route} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Pages/Home';
import Bookmark from './Pages/Bookmark';
function App() {
  return (
    <Container className='d-flex flex-column align-items-center jusitfy-content-center' style={{minHeight:"100vh"}}>
      <Header />
      
  
        <Routes>
          <Route exact path="/" element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
           } />
          <Route exact path="/bookmarks" element={
                <PrivateRoute>
                  <Bookmark />
                </PrivateRoute>
           } />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Container>
  );
}

export default App;
