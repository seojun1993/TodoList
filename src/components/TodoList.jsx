import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'
import { TodoContext } from '../contenxt'
import { DELETE_TODO_COMPLETED, TOGGLE_TODO_ALL } from '../reducer'

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
      <div className="todo-list">
        <div className="todo-header">
            <input type="checkbox" className='todo-checkbox' checked={isAllCompleted} onChange={handleToggleAll}/>
            <p className='todo-header-text'>할 일</p>
            {completedCount > 0 && (
                <button className='todo-header-button' onClick={handleDeleteCompleted}>{completedCount}개 선택 삭제</button>
            )}
        </div>

        <div>
            {filterdList.map((list) => {
                return (<TodoItem key={list.id} {...list} />
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default TodoList
