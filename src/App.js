import './App.css';
import Header from "./MyComponents/Header"
import { Todos } from "./MyComponents/Todos"
import { Addtodo } from "./MyComponents/Addtodo"
import { Footer } from "./MyComponents/Footer"
import { About } from "./MyComponents/About"
import { Alert } from "./MyComponents/Alert"
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"))
  }

  // ------------------------DELETE BUTTON (TODOITEM.JS)---------------------------

  const onDelete = (todo) => {
    // console.log("funtion called ondelete.", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    showAlert("TASK DELETED!","warning")
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // -------------------------ADD BUTTON (ADDTODO.JS)-----------------------------

  const addtodo = (title, desc) => {
    console.log("Adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo])
    console.log(mytodo)
  }

  // ----------------------------------------------------------------

  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // -------------------------THEME----------------------------------

  const [mode, setMode] = useState('light')
  if (mode==='light'){
    document.body.style.backgroundColor = '#f2fcfa';
  }

  const [btnText, setBtnText] = useState('Enable Dark Mode')

  const toggleStyle = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#21202e';
      setMode('dark');
      setBtnText('Enable Light Mode');
      // setBtnText('./MyComponents/images/light.jfif');
      console.log('dark mode');
      showAlert("Dark Mode is enabled","success")
    }
    else {
      document.body.style.backgroundColor = '#f2fcfa';
      setMode('light')
      setBtnText('Enable Dark Mode')
      // setBtnText('./MyComponents/images/dark.jfif');
      console.log('light mode')
      showAlert("Light Mode is enabled","success")

    }
  }
  // -------------------------ALERT----------------------------------
  const [alert,setAlert]= useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },4000)
  }
  // const submit=()=>{
  //   showAlert("TASK ADDED","success")
  // }

  return (
    <>
      <Router>
        <Header title="TODOs List" mode={mode} toggle={toggleStyle} text={btnText} search={false} />
        <Alert alert={alert}/>
        <Routes>
          <Route path='/' element={<>

            <div className="container">
              <Addtodo  mode={mode} showAlert={showAlert}  addtodo={addtodo} />
              <Todos  todos={todos} mode={mode} onDelete={onDelete} />
            </div>
          </>
        }>
          </Route>

          <Route path='/about' element={<About mode={mode}/>}>
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
