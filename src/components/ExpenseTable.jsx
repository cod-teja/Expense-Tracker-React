import { useState } from "react"
import useFilterDate from "../Hooks/useFilterData"
import ContextMenu from "./ContextMenu"

const ExpenseTable = ({ allExpenses, setAllExpenses,setNewExpense,rowId, setRowId }) => {

  const [query, setQuery] = useState("")
  const [filteredData] = useFilterDate(allExpenses, query)
  const [contextMenuPostion, setContextMenuPosition] = useState({})

  const [sortMethod, setSortMethod] = useState(() => () => {})
  return (
    <>
      <ContextMenu
        contextMenuPostion={contextMenuPostion}
        rowId={rowId}
        allExpenses={allExpenses}
        setAllExpenses={setAllExpenses}
        setContextMenuPosition={setContextMenuPosition}
        setNewExpense={setNewExpense}
      />
      <table
        className="expense-table"
        onClick={() => setContextMenuPosition({})}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setQuery(e.target.value)}>
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Clothes">Clothes</option>
                <option value="Bills">Bills</option>
                <option value="Education">Education</option>
                <option value="Medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={() => {
                    setSortMethod(() => (a, b) => a.amount - b.amount)
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={10}
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={() => {
                    setSortMethod(() => (a, b) => b.amount - a.amount)
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.sort(sortMethod).map((data) => (
            <tr
              key={data.id}
              onContextMenu={(e) => {
                e.preventDefault()
                setRowId(data.id)
                setContextMenuPosition({
                  left: e.clientX + 5,
                  top: e.clientY + 5,
                })
              }}
            >
              <td>{data.title}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
            </tr>
          ))}

          <tr>
            <th>Total</th>
            <th />
            <th>₹{filteredData.reduce((acc, crr) => acc + +crr.amount, 0)}</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default ExpenseTable
