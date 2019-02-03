import React from 'react'

export default ({input, label, type, required}) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input type={type} className="form-control" required={required} {...input} />
        </div>
    )
};

