import React, { useState,useRef,MutableRefObject, useCallback } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Task } from './Components/Model';

const App:React.FC = () => {
  console.log('App Rendering');
  const taskRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [tasks,setTasks] = useState<Task[]>([]);

  const handleAdd = useCallback((e:React.FormEvent,task:string)=>{
      e.preventDefault();
      if(!taskRef.current.value){
        window.alert('Please Add Task')
        return;
      };
      setTasks(
        [...tasks,
        {id:Date.now(),task,isDone:false}
        ]);
        console.log(tasks);
       // removing value from input field
       taskRef.current.value = "";
},[taskRef.current.value]);
  return (
    <div className='App'>
      <span className='heading'>Task Manager</span>
      <InputField handleAdd={handleAdd} taskRef={taskRef}/>
    </div>
  )
}

export default App;