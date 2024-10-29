import { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../contenxt'
import { DELETE_TODO_COMPLETED, TOGGLE_TODO_ALL } from '../reducer'
import styled from '@emotion/styled'

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

    const completedCount = state.list.filter(list => list.completed === true).length;
    const handleToggleAll = (e) => {
      dispatch({ type: TOGGLE_TODO_ALL, payload : e.target.checked })
    }

    const handleDeleteCompleted = () => {
      dispatch({ type: DELETE_TODO_COMPLETED })
    }

    const filterdList = state.list.filter(list => {
      switch(state.filterType) {
        case 'TODO' : return !list.completed;
        case 'COMPLETED' : return list.completed;
        default : return true;
      }
    })

    const isAllCompleted = filterdList.length > 0 && filterdList.every(list => list.completed);
  return (
    <div>
      <List>
        <Header>
            <Checkbox type="checkbox" checked={isAllCompleted} onChange={handleToggleAll}/>
            <Text>할 일</Text>
            {completedCount > 0 && (
                <Button onClick={handleDeleteCompleted}>{completedCount}개 선택 삭제</Button>
            )}
        </Header>

        <div>
            {filterdList.map((list) => {
                return (<TodoItem key={list.id} {...list} />
                )
            })}
        </div>
      </List>
    </div>
  )
}

const List = styled.div`
    border: 1px solid gray;
    border-radius: 6px;
    margin-top: 16px;
`

const Header = styled.div`
    display: flex;
    height: 40px;
    padding: 0 12px;
    gap: 12px;
    align-items: center;
`

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
`

const Text = styled.p`
  flex-grow: 1;
`

const Button = styled.button`
    border: 1px solid gray;
    border-radius: 6px;
    background-color: transparent;
    padding: 0 12px;
    color: white;
    flex-shrink: 0;
    line-height: 1;
    height: 30px;
`

export default TodoList
