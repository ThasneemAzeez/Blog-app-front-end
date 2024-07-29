
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import CreatePost from './Components/CreatePost';
import ViewAll from './Components/ViewAll';
import ViewMyPost from './Components/ViewMyPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      <Route path='/viewmypost' element={<ViewMyPost/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
