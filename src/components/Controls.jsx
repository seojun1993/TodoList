import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, setFilter } from '../store/todoSlice'

const inputClassName = `grow border-[1px] border-solid rounded-[6px] bg-transparent px-[12px] py-[4px] text-[14px] leading-[20px] text-white`
const commonClassName = `border-[1px] border-solid border-gray-500 rounded-[6px] bg-transparent px-[12px] py-[0px] text-white shrink`
const selectClassName = `bg-black border-[1px] border-solid border-gray-500 rounded-[6px]`

const Controls = () => {
  const state = useSelector(state => state.todo);
  const dispatch = useDispatch();

    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        // dispatch({ type: ADD_TODO, payload : text });
        dispatch(addTodo(text));
        setText('');
    }

    const handleChangeFilterType = (e) => {
      // dispatch({ type: SET_FILTER, payload : e.target.value });
      dispatch(setFilter(e.target.value));
    }

  return (
    <div className='flex gap-[6px] h-[30px]'>
      <input type="text" className={inputClassName} value={text} onChange={handleChange}/>
      <button className={commonClassName} onClick={handleSubmit}>추가</button>
      <select className={selectClassName} value={state.filterType} onChange={handleChangeFilterType}>
        <option value="ALL">전체</option>
        <option value="TODO">할 일</option>
        <option value="COMPLETED">완료</option>
      </select>
    </div>
  )
}
export default Controls
