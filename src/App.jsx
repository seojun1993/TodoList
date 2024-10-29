import Layout from './components/Layout'
import Title from './components/Title'
import Controls from './components/Controls'
import TodoList from './components/TodoList'
import { TodoProvider } from './contenxt'

function App() {  
  return (
    <TodoProvider>
      <Layout>
        <Title />
        <Controls />
        <TodoList />
      </Layout>
    </TodoProvider>
  )
}

export default App
