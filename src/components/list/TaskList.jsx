import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente que gestiona la lista de tareas
 * 
 * @returns {React.Component}
 */

const TaskList = ({ showSettings, setShowSettings }) => {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  /**
   * Añade una nueva tarea a la lista de tareas
   */
  const addNewTask = () => {
    if ( newTask === "" ) return 
    setTaskList([...taskList, { task: newTask, completed: false }]);
    setNewTask("");
  };
  
  /**
   * funcion para chekear si la lista de tareas esta vacia
   * @returns true si tasklist.length === 0
   */
  const isTaskEmpty = () => taskList.length === 0;
  
  /**
   * funcion para eliminar una tarea en concreto
   * @param {*} index -Indice de la tarea a eliminar
   */
  // const removeItem = (index) => {
  //   const newTasklist = taskList.filter((t, i) => i !== index);
  //   setTaskList(newTasklist);
  // };
  
  /**
   * Cambia el item por completado <-> pendiente
   * @param {*} index
   */
  const toggleCompleteItem = (index) => {
    const newTaskList = taskList;
    newTaskList[index].completed = !newTaskList[index].completed;
    console.log(newTaskList[index].completed);
    setTaskList([...newTaskList]);
  };
  /**
   * Editar el nombre de la nueva tarea
   * @param {*} e - Evento de onChange proviente de React
   */
  const addnewitem = (e) => setNewTask(e.target.value);

  /**
   * añade una nueva tarea cuando se presiona la tecla Enter
   * @param {*} e - Evento onKeyDown  que proviene por defecto de React
   * @returns 
   */
  const insertNewItemOnEnterKey = (e) => e.key === 'Enter' && addNewTask();
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-3xl text-cyan-600 font-semibold dark:text-sky-300">Task List - hosted on: firebase v2</h1>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{scale: 0.9}} className="btn" onClick={() => setShowSettings(!showSettings)} >{!showSettings ? "Show settings" : "Hide settings" }</motion.button>
      </header>
      <div className="my-4">
        <input className="shadow py-1 px-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 mr-2 dark:bg-slate-600" onKeyDown={insertNewItemOnEnterKey} value={newTask} onChange={addnewitem} placeholder="New Task" type="text" />
        <button className="btn" type="button" onClick={addNewTask}>Create Task</button>
      </div>
      { isTaskEmpty() 
             ? (<p>Task List is Empty</p>)
             : (
               <ul>
                 {taskList.map((item, index) => (
                   <motion.li initial={{ x: "100vw" }} animate={{ x: 0 }} key={index}>
                     <input 
                       type="checkbox" 
                      //  onClick={() => removeItem(index)}
                       onClick={() => toggleCompleteItem(index)}
                      //  onChange={() => ()}
                       defaultChecked={item.completed}
                     />
                     <span className={`ml-2 text-gray-700 dark:text-slate-300 text-sm italic ${item.completed && "line-through"}`}>{ item.task }</span>
                   </motion.li>
                         ))}
               </ul>
             )}
             
    </>
    
  );    
};
 
export default TaskList;
