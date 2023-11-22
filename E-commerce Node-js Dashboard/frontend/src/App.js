
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import SIgnUp from './Components/SIgnUp';
import PrivateComponent from './Components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing Component</h1>}/>
        <Route path='/add' element={<h1>Add Product Component</h1>}/>
        <Route path='/update' element={<h1>Update Product Component</h1>}/>
        <Route path='/logout' element={<h1>Logout Product Component</h1>}/>
        <Route path='/profile' element={<h1>Profile Listing Component</h1>}/>
        </Route>
        <Route path='/signup' element={<SIgnUp/>}/>

      </Routes>
      
      </BrowserRouter>
      <Footer/>
     
     
    
     
    </div>
  );
}

export default App;
