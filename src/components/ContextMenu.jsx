const ContextMenu = ({
  contextMenuPostion,
  rowId,
  allExpenses,
  setAllExpenses,
  setContextMenuPosition,
  setNewExpense,
}) => {
  if (!contextMenuPostion?.left) {
    return
  }

  return (
    <div className="context-menu" style={contextMenuPostion}>
      <div
        onClick={() => {
          const [editExpense] = allExpenses.filter(
            (expense) => expense.id === rowId
          )
          setNewExpense(editExpense)
          setContextMenuPosition({})
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setAllExpenses(allExpenses.filter((expense) => expense.id !== rowId))
          setContextMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  )
}

export default ContextMenu
