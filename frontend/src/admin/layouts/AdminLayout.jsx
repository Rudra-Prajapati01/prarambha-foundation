import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function AdminLayout({
  children,
}) {

  return (

    <div
      className="
        flex
        bg-[#F3F4F6]
        min-h-screen
        overflow-hidden
      "
    >

      <Sidebar />

      <div
        className="
          flex-1
          flex
          flex-col
          overflow-hidden
        "
      >

        <Topbar />

        <main
          className="
            flex-1
            overflow-y-auto
            p-4
            md:p-8
          "
        >

          <div className="max-w-[1600px]">

            {children}

          </div>

        </main>

      </div>

    </div>
  )
}

export default AdminLayout