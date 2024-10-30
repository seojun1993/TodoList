import Layout from './components/Layout'
import Title from './components/Title'
import Controls from './components/Controls'
import TodoList from './components/TodoList'

function App() {  
  return (
      <Layout>
        <Title />
        <Controls />
        <TodoList />
      </Layout>
  )
}

export default App
