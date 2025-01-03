import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import ExpenseForm from "./components/ExpesnseForm"
import ExpenseTable from "./components/ExpenseTable"

import ExpenseData from "./Constants"

function App() {
  const [allExpenses, setAllExpenses] = useState(ExpenseData)

  const [newExpense, setNewExpense] = useState({
    title: "",
    category: "",
    amount: "",
  })

  const [rowId, setRowId] = useState("")

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setAllExpenses={setAllExpenses}
            newExpense={newExpense}
            setNewExpense={setNewExpense}
            rowId={rowId}
            setRowId={setRowId}
          />
          <ExpenseTable
            allExpenses={allExpenses}
            setAllExpenses={setAllExpenses}
            setNewExpense={setNewExpense}
            rowId={rowId}
            setRowId={setRowId}
          />
        </div>
      </main>
    </>
  )
}

export default App
