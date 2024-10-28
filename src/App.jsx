import Layout from './components/Layout'
import Title from './components/Title'
import Controls from './components/Controls'
import TodoList from './components/TodoList'
import { useReducer } from 'react'
import { 
  ADD_TODO, 
  UPDATE_TODO, 
  DELETE_TODO, 
  TOGGLE_TODO, 
  TOGGLE_TODO_ALL, 
  DELETE_TODO_COMPLETED, 
  SET_FILTER,
  initialState, 
  reducer 
} from './reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChangeFilterType = ( type ) => {
    dispatch({ type : SET_FILTER, payload : type });
  }

  const handleSubmit = (value) => {
    dispatch({ type : ADD_TODO, payload : value });
  }

  const handleOnToggle = ( id ) => {
    dispatch({ type: TOGGLE_TODO, payload : id})
  }

  const handleToggleAll = (flag) => {
    dispatch({ type: TOGGLE_TODO_ALL, payload : flag})
  }

  const handleDelete = ( id ) => {
    dispatch({ type: DELETE_TODO, payload : id})
  }

  const handleDeleteCompleted = () => {
    dispatch({ type : DELETE_TODO_COMPLETED })
  }

  const handleUpdate = (id, text) => {
    dispatch({ type : UPDATE_TODO, payload : { id, text } })
  }

  const filteredList = state.list.filter(list => {
    switch(state.filterType) {
      case 'ALL' : return list;
      case 'TODO' : return !list.completed;
      default : return list.completed;
    }
  })
  
  return (
    <div>
    <Layout>
      <Title />
      <Controls onSubmit={handleSubmit} filterType={state.filterType} onChangeFilterType={handleChangeFilterType}/>
      <TodoList 
      data={filteredList} 
      onToggle={handleOnToggle} 
      onToggleAll={handleToggleAll} 
      onDelete={handleDelete} 
      onDeleteAllCompleted={handleDeleteCompleted}
      onUpdate={handleUpdate}
      />
      Hello World
    </Layout>
    </div>
  )
}

export default App
