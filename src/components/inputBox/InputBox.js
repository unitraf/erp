import React from 'react'
// import './inputBox.css'
const InputBox = ({id,value, type,  label, handleChange}) => {
    
  return (
    <div className="inputBox">
          <input
            id={id}
            value={value}
            type={type}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor={id}>{label}</label>
        </div>
  )
}

export default InputBox