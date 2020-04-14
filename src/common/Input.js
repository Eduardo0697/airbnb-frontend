import React from 'react';

function Input({label,type,placeholder,change,value,name,required}){
    return(
        <div className="control-group">
            <div className="form-group">
                <label>{label}</label>
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    onChange={change}
                />
            </div>
        </div>
    );
};

export default Input;