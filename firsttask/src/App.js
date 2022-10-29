import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './Components/TodoList';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import CreatePost from './Components/CreatePost';


function App() {
  return (<>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Todo List' element={<TodoList />} />
          <Route path='/About/:id' element={<About/>} />
          <Route path='Createpost' element={<CreatePost/>} />
        </Routes>
      </BrowserRouter>

    </div>
  </>
  );
}

export default App;
