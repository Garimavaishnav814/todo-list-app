import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './componets/header/Header'
import TaskList from './componets/taskList/TaskList'
// import Header from './componets/header/Header';
// import SignUp from './componsets/signUp/SignUp';
import SignUp from './componets/signUp/signUp';
// import RevtaskList from './componets/taskList/revtaskList';
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes >
      <Route path='/' Component={SignUp}/>
      {/* <Route path='/header' Component={Header}/> */}
      <Route path='/todo' Component={TaskList} />
    </Routes>
    </BrowserRouter>
    //  <div id='app'>
    //   {/* <Header/>
    //    <TaskList />  */}
    //   <SignUp/>
    // </div>
  )
}

export default App;
