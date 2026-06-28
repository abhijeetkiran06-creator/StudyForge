import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {

    return (

        <div className="flex bg-[#F8FAFC]">

            <Sidebar />

            <div className="flex-1">

                <Topbar />

                <div className="p-8">

                    {children}

                </div>

            </div>

        </div>

    )

}

export default Layout;