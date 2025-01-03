import React from "react"

export default function InputElement({id,title,newExpense,setNewExpense,errorMessage}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{title}</label>
      <input id={id} value={newExpense[id]} onChange={(e)=>{
        setNewExpense((prevState) =>({...prevState,[id]:e.target.value}))
      }} />
      <p className="error-message">{errorMessage?.[id]}</p>
    </div>
  )
}
