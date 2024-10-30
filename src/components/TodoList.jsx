import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodoCompleted, toggleTodoAll } from '../store/todoSlice';

const listClassName = `border-[1px] border-solid border-gray-500 rounded-[6px] mt-[16px]`;
const headerClassName = `flex items-center h-[40px] px-[12px] gap-[12px]`;
const checkboxClassName = `w-[16px] h-[16px]`;
const textClassName = 'grow';
const buttonClassName = `border-[1px] border-solid border-gray-500 rounded-[6px] bg-transparent px-[12px] py-[0px] text-white shrink h-[30]px`

const TodoList = () => {
  const state = useSelector(state => state.todo);
  const dispatch = useDispatch();

    const completedCount = state.list.filter(list => list.completed === true).length;
    const handleToggleAll = (e) => {
      dispatch( toggleTodoAll(e.target.value) )
    }

    const handleDeleteCompleted = () => {
      dispatch( deleteTodoCompleted )
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
      <div className={listClassName}>
        <div className={headerClassName}>
            <input type="checkbox" className={checkboxClassName} checked={isAllCompleted} onChange={handleToggleAll}/>
            <p className={textClassName}>할 일</p>
            {completedCount > 0 && (
                <button className={buttonClassName} onClick={handleDeleteCompleted}>{completedCount}개 선택 삭제</button>
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
