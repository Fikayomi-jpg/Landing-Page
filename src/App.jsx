import { Welcome } from './Welcome'
import './App.css'
import { Alert } from './Alert'
import ToDo from './ToDoList'
import LandingPage from './LandingPage' 

function App() {
  return (
    <div>
      {/* <ToDo /> */}
      <LandingPage /> 
      {/* 
      <h1>CodeEvolution Course</h1>
      <Alert>Your changes have been saved!</Alert>
      <Alert type="error">Something went wrong!</Alert>
      <Welcome /> 
      */}
    </div>
  )
}

export default App