import React,{MutableRefObject, useRef} from 'react';
import './styles.css';

interface PropsForInputField{
  handleAdd:(e:React.FormEvent,task:string) => void;
  taskRef:MutableRefObject<HTMLInputElement>
}

const InputField = ({handleAdd,taskRef}:PropsForInputField) => {
  console.log('Input Rendering');
  return (
    <form className='input' onSubmit={(e)=>handleAdd(e,taskRef.current.value)}>
        <input type='input' placeholder='Enter Your Task' className='inputBox' ref={taskRef}/>
        <button className='inputSubmit' type='submit'>Add Task</button>
    </form>
  )
}

export default React.memo(InputField);