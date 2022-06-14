import Nav from './Nav';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import Cart from './Cart';
import Item from './Item';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item' element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
