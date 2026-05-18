import { Navigate } from "react-router-dom"

function ProtectedRoute({
  children,
}) {

  let adminInfo = null

  try {

    adminInfo = JSON.parse(
      localStorage.getItem(
        "adminInfo"
      )
    )

  } catch (error) {

    console.log(
      "Invalid adminInfo"
    )

    localStorage.removeItem(
      "adminInfo"
    )
  }

  return adminInfo
    ? children
    : <Navigate to="/admin" replace />
}

export default ProtectedRoute