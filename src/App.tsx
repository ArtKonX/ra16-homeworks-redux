import './App.css'
import FormEditing from './components/FormEditing'
import Tasks from './components/Tasks'
import SearchForm from './components/SearchForm';

function App() {

  return (
    <div className='tasks-container'>
      <SearchForm />
      <FormEditing />
      <Tasks />
    </div>
  )
}

export default App
