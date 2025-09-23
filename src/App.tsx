import './App.css'
import AddToDo from './components/add-todo'
import ToDoList from './components/todo-list'
function App() {

  return (
    <>
      <div className='container flex flex-col space-y-6'>
        <p className='text-5xl font-mono font-bold'>To-Do list📝</p>
        <AddToDo />
        <p className="text-3xl font-mono font-bold">My tasks</p>
        <ToDoList />
      </div>
    </>
  )
}

export default App
