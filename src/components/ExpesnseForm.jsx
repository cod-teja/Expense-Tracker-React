import { useState } from "react"
import InputElement from "./InputElement"
import SelectMenu from "./SelectMenu"

const ExpenseForm = ({
  setAllExpenses,
  newExpense,
  setNewExpense,
  rowId,
  setRowId,
}) => {
  const [errorObj, setErrorObj] = useState({})

  function Validation(objectTobeValidated) {
    const error = {}
    const validations = {
      title: [{ required: true, message: "Please Enter a valid Title" }],
      category: [{ required: true, message: "Please select a valid category" }],
      amount: [
        { required: true, message: "Please Enter a valid Amount" },
        {
          amount: 1,
          message: "Please enter a value Cannot be a '0' or 'negative'",
        },
      ],
    }

    for (let [key, value] of Object.entries(validations)) {
      value.forEach((check) => {
        debugger

        if (check.required && !objectTobeValidated[key]) {
          error[key] = check.message
        }
        if (check.amount && !+objectTobeValidated[key] >= check.amount) {
          error[key] = check.message
        }
      })
    }

    console.log(errorObj)
    // setErrorObj(error)

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Validation(newExpense)) {
      return
    }

    debugger

    if (rowId) {
      setAllExpenses((prevState) =>
        prevState.map((expense) => {
          if (expense.id === rowId) return newExpense
          return expense
        })
      )
      setRowId("")
      setNewExpense({
        title: "",
        category: "",
        amount: "",
      })

      return
    }

    setAllExpenses((prevState) => [
      ...prevState,
      { ...newExpense, id: crypto.randomUUID() },
    ])
    setNewExpense({
      title: "",
      category: "",
      amount: "",
    })
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <InputElement
        id={"title"}
        title={"Title"}
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        errorMessage={errorObj}
      />
      <SelectMenu
        id={"category"}
        title={"Category"}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        errorMessage={errorObj}
      />
      <InputElement
        id={"amount"}
        title={"Amount"}
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        errorMessage={errorObj}
      />
      <button className="add-btn">Add</button>
    </form>
  )
}

export default ExpenseForm
