const SelectMenu = ({ id, title, options, newExpense, setNewExpense,errorMessage }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{title}</label>
      <select id={id} value={newExpense[id]} onChange={(e)=>{
        setNewExpense((prevState) => ({...prevState,[id]:e.target.value}))
      }}>
        <option value="" hidden>
          Select Category
        </option>
        {options.map((each, i) => (
          <option value={each} key={i}>
            {each}
          </option>
        ))}
      </select>
      <p className="error-message">{errorMessage?.[id]}</p>
    </div>
  )
}

export default SelectMenu
