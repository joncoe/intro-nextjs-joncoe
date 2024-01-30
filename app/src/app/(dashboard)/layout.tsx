import NewTodoForm from '../components/NewToDoForm'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </>
  )
}

export default DashboardLayout
