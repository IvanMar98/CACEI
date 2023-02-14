import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Login />}/>
      </Routes>
    </div>
  )
}

export default App
