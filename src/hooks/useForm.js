import {useEffect, useState} from 'react';

function useForm(callback, current= {}){
    const [ inputs, setInputs] = useState(current);

    useEffect( () => {
        if(current.me){
            delete current.me.__typename;
            setInputs({...current.me})
        }
    }, [current]);
    const handleInputChange = event => {
        event.persist();
        const { name, value } = event.target;
        setInputs(fields =>({ ...fields, [name]: value}));
    };

    const handleSubmit = event => {
        if (event) event.preventDefault();
        callback(inputs);
    };

    return {
        inputs,
        handleInputChange,
        handleSubmit,
    };
};

export default useForm;