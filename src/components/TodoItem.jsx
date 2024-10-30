import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../store/todoSlice';

const ItemClassName = `flex items-center h-[65px] gap-[12px] px-[12px]`;
const CheckboxClassName = `w-[16px] h-[16px]`;
const InputClassName = `grow border-[1px] border-solid border-gray-500 rounded-[6px] bg-transparent px-[12px] py-[4px] text-[14px] leading-[20px] text-white`
const TextClassName = `grow`;
const ButtonClassName = `w-[32px] h-[30px] bg-black text-white border-none`

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const handleEdit = () => { setEdit((prev) => !prev);}
    const handleChange = (e) => { dispatch(updateTodo({ id, text : e.target.value })) }
    const handleToggle = () => { dispatch(toggleTodo(id)) }
    const handleDelete = () => { dispatch(deleteTodo(id)) }
  return (
    <div className={ItemClassName}>
        <input type="checkbox" className={CheckboxClassName} checked={completed} onChange={handleToggle}/>
        { edit 
        ? <input className={InputClassName} value={text} onChange={handleChange}/> 
        : <p className={[TextClassName, completed && 'line-through'].join(' ')}>{text}</p> }
        
        <button className={ButtonClassName} onClick={handleEdit}>수정</button>
        <button className={ButtonClassName} onClick={handleDelete}>삭제</button>
    </div>
  )
}

export default TodoItem
