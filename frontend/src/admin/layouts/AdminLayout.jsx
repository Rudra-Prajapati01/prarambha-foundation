import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function AdminLayout({ children }) {

  return (
    <div className="flex bg-[#F3F4F6] min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>
  )
}

export default AdminLayout