import TodoList from '@/app/components/ToDoList'
import db from '@/app/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const ToDosPage = async () => {
  const todos = await getData()
  return (
    <>
      <h1>To Do List</h1>
      <TodoList todos={todos} />
    </>
  )
}

export default ToDosPage
