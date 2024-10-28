import React, { useEffect } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ( {
    data, 
    onToggle, 
    onToggleAll, 
    onDelete, 
    onDeleteAllCompleted,
    onUpdate,
} ) => {
    const isAllCompleted = data.length > 0 && data.every(item => item.completed);
    const completedCount = data.filter(item => item.completed === true).length;
  return (
    <div>
      <div className="todo-list">
        <div className="todo-header">
            <input type="checkbox" className='todo-checkbox' checked={isAllCompleted} onChange={(e) => onToggleAll(e.target.checked)}/>
            <p className='todo-header-text'>할 일</p>
            {completedCount > 0 && (
                <button className='todo-header-button' onClick={onDeleteAllCompleted}>{completedCount}개 선택 삭제</button>
            )}
        </div>

        <div>
            {data.map((list) => {
                return (
                    <TodoItem 
                    key={list.id} 
                    id={list.id}
                    text={list.text} 
                    completed={list.completed} 
                    onToggle={() => onToggle(list.id)} 
                    onDelete={() => onDelete(list.id)}
                    onUpdate={onUpdate}
                    />
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default TodoList
