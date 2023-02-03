import React, { useState, useEffect } from 'react';
import TaskList from './list/TaskList';
import Settings from './settings/settings';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Funcion Anónima para crear un componete principal
 * @returns { React.Component } componente principal de nuestra aplicacion
 */
const App = () => {
  const [dark, setDark] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  /**
   * Documentacion useEffect
   * se crea una variable de estado donde se almacena el valor de la configuracion del local storage
   */
  useEffect(() => {
    // try {
    //   const config = JSON.parse(localStorage.getItem('config'));
    //   setDark(config.theme);
    // } catch (error) {
    // }
    setDark(false)
}, []);

  /**
   * funcion para  intercambiar la variable de estado light<->dark
   */
  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    // eslint-disable-next-line quotes
    <div className={`${!dark ? 'dark' : ''}`}>
      <div className={`h-screen p-4 flex flex-col  bg-gray-300 dark:bg-slate-800 transition
      dark:text-gray-100`}>
        <TaskList showSettings={showSettings} setShowSettings={setShowSettings}/>
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
          {showSettings && 
            <motion.div initial={{ y: '100vh' }} animate={{ y: '0' }} exit={{ y:'100vh' }}>
              <Settings toggleDark={toggleDark} />
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
    
  );
 };

export default App;
