import React, { useContext } from 'react'
import './Controls.css'
import { useState } from 'react'
import { TodoContext } from '../contenxt'
import { ADD_TODO, SET_FILTER } from '../reducer'

const Controls = () => {
  const { state, dispatch } = useContext(TodoContext);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        dispatch({ type: ADD_TODO, payload : text });
        setText('');
    }

    const handleChangeFilterType = (e) => {
      console.log(e.target.value)
      dispatch({ type: SET_FILTER, payload : e.target.value });
    }

  return (
    <div className='controls'>
      <input type="text" className='input' value={text} onChange={handleChange}/>
      <button className='button' onClick={handleSubmit}>추가</button>
      <select className='select' value={state.filterType} onChange={handleChangeFilterType}>
        <option value="ALL">전체</option>
        <option value="TODO">할 일</option>
        <option value="COMPLETED">완료</option>
      </select>
    </div>
  )
}

export default Controls
