import React,{useRef} from 'react';
import './styles.css';

const InputField = () => {
    const taskRef = useRef<HTMLInputElement>();
    function submitHandler(e:any){
        e.preventDefault();
        window.alert(`ubmitted ${taskRef.current?.value}`);
    }
  return (
    <form className='input' onSubmit={submitHandler}>
        <input type='input' placeholder='Enter Your Task' className='inputBox' ref={taskRef}/>
        <button className='inputSubmit' type='submit'>Add Task</button>
    </form>
  )
}

export default InputField;