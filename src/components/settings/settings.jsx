import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es',
};

export default function Settings({ toggleDark }) {
  const [config, setConfig] = useLocalStorage('config', defaultConfig);

  /**
   * funcion para intercambiar light <-> dark tanto en localStorage como en estado de la aplicacion
   * @param {*} event  - Evento de click proveniente de React
   */
  const toggleMode = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => ({
            ...oldConfig,
            theme: oldConfig.theme === 'light' ? 'dark' : 'light',
        }));
        toggleDark();
    };

  return (
    <div className="text-right">
      <hr className="my-4"/>
      <h1 className="text-3xl text-purple-600 font-semibold md-4 dark:text-cyan-400">APP SETTINGS</h1>
      <p className="text-sm ">
        Actual Config: 
       <span className="italic">{config.theme} </span> 
      </p>
      <button className="btn mt-4" type="button" onClick={toggleMode}>
        Toggke darkMode
      </button>
    </div>
  );
}