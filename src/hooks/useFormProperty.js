import { useState } from 'react';

function useFormProperty(callback, current= {}){
    const [ inputs, setInputs] = useState(current);
    const [ feat, setFeatures] = useState(current);
    const [ services, setServices] = useState(current);

    const handleInputChange = event => {
        event.persist();
        const { name, value } = event.target;
        setInputs(fields =>({ ...fields, [name]: value}));
        //console.log('InputsHook',inputs);
    };

    const handleServiceChange = event => {
        event.persist();
        const { name, value } = event.target;
        setServices(fields =>({ ...fields, [name]: JSON.parse(value)}));
        //console.log('ServicesHook',services);
    };

    const handleFeatureChange = event => {
        event.persist();
        const { name, value } = event.target;
        setFeatures(fields =>({ ...fields, [name]: JSON.parse(value)}));
        //console.log('FeaturesHook',feat);
    };

    const handleSubmit = event => {
        if (event) event.preventDefault();
        callback(inputs,feat,services);
    };

    return {
        inputs,
        feat,
        services,
        handleFeatureChange,
        handleServiceChange,
        handleInputChange,
        handleSubmit,
    };
};

export default useFormProperty;