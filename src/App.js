import './App.css';
import Header from './components/Header';
import Screen from './components/Screen';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';
import RemoveProduct from './components/RemoveProduct';
import AddProductDetails from './components/AddProductDetails';
import RemoveProductDetails from './components/RemoveProductDetails';
import {BrowserRouter as Router,Route , Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <main className="py-3">
          <Header/>
          <Routes>
                <Route exact path='/' element={<Screen/>}/>
                <Route path='/inventorylist/addproduct' element={<AddProduct/>}/>
                <Route path='/inventorylist/addproductdetails' element={<AddProductDetails/>}/>
                <Route path='/inventorylist/productslist' element={<ProductsList/>}/>
                <Route path='/inventorylist/removeproduct' element={<RemoveProduct/>}/>
                <Route path='/inventorylist/removeproductdetails' element={<RemoveProductDetails/>}/>
          </Routes>
      </main>    
      </Router>
    </div>
  );
}

export default App;
