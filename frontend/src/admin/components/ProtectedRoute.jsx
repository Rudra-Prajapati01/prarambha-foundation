import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

  const adminInfo = JSON.parse(
    localStorage.getItem("adminInfo")
  )

  return adminInfo
    ? children
    : <Navigate to="/admin" />
}

export default ProtectedRoute