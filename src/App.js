import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Layout from './Components/Layout/layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/home-page';
import Members from './Components/Add-members/add-members';

function App() {
  const store = useSelector(store => store)
  console.log(store)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="members" element={<Members />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
