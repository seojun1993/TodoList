import Layout from './components/Layout'
import Title from './components/Title'
import Controls from './components/Controls'
import TodoList from './components/TodoList'
import { useState } from 'react'
import { useRef } from 'react'

function App() {
  const idRef = useRef(0)
  const [list, setList] = useState( [] );
  const [filterType, setFilterType] = useState('ALL');

  const handleChangeFilterType = ( type ) => {
    setFilterType(type)
  }

  const handleSubmit = (value) => {
    setList(prevList => prevList.concat({
      id : (idRef.current += 1),
      text : value,
      completed : false,
    }))
  }

  const handleOnToggle = ( id ) => {
    setList(prevList => prevList.map(item => {
      if(item.id === id) {
        return { ...item, completed : !item.completed }
      }
      return item;
    }))
  }

  const handleToggleAll = (flag) => {
    setList(prevList => prevList.map(item => ({ ...item, completed : flag })))
  }

  const handleDelete = ( id ) => {
    setList(prevList => prevList.filter(item => item.id !== id))
  }

  const handleDeleteCompleted = () => {
    setList(prevList => prevList.filter(item => !item.completed ))
  }

  const handleUpdate = (id, text) => {
    setList(prevList => prevList.map(item => {
      if(item.id === id) {
        return {...item, text}
      }
      return item;
    }))
  }

  const filteredList = list.filter(list => {
    if(filterType === 'ALL'){
      return list;
    }else if(filterType === 'TODO'){
      return !list.completed;
    }else{
      return list.completed
    }
  })
  
  return (
    <div>
    <Layout>
      <Title />
      <Controls onSubmit={handleSubmit} filterType={filterType} onChangeFilterType={handleChangeFilterType}/>
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
