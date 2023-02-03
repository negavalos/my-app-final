import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setvalue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setvalue((oldValue) => [...oldValue, element]);
    };
    // remove value from list
    const remove = (index) => {
        setvalue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // list is empy ? true /false
    const isEmpty = () => value.length === 0;

    // TODO Develop more functions for lists

    return {
        value, setvalue, push, remove, isEmpty,
    };
};

export default useList;
