import { useState, useRef } from 'react';

// Nuestro Hook para gestionar Booleanos
export const useBoolean = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const updateValue = useRef(
        {
            on: () => setValue(true),
            off: () => setValue(false),
            toggle: () => setValue((oldValue) => !oldValue),
        },
    );
    // return de el valor booleano y las funciones de on, off y toggle declaradas en la referencia
    return [value, updateValue.current]; // { value, on, off, toggle }
};
