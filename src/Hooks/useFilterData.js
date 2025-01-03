

const useFilterDate = (Expenses, query, callback) => {

    const filteredData = Expenses.filter((expense) =>
      expense.category.toLowerCase().includes(query.toLowerCase())
    )

  return [filteredData]
}

export default useFilterDate
