import { useState, useEffect } from 'react';

function useFormProperty(callback, currentInputs= {}){
    const [ inputs, setInputs] = useState(currentInputs);
    const [ feat, setFeatures] = useState(currentInputs);
    const [ services, setServices] = useState(currentInputs);

    useEffect( () => {
      if (currentInputs.getPropertyById){
          const inputs = currentInputs.getPropertyById;
          delete inputs.__typename;
          const features = currentInputs.getPropertyById.features;
          const services = currentInputs.getPropertyById.services;
          delete inputs.features;
          delete inputs.services;
          setInputs( {...inputs});
          if( features){
              delete features.__typename;
              delete features.propertyType;
              setFeatures({...features});
          }
          if( services){
              delete services.__typename;
              setServices({...services});
          }
      }
    }, [currentInputs]);

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
        // console.log('ServicesHook',services);
    };

    const handleFeatureChange = event => {
        event.persist();
        const { name, value } = event.target;
        setFeatures(fields =>({ ...fields, [name]: JSON.parse(value)}));
        // console.log('FeaturesHook',feat);
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