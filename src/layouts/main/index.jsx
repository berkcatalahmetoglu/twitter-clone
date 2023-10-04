import { Outlet } from "react-router-dom";
import RightBar from "./rightbar";
import Sidebar from "./sidebar";

export default function MainLayout() {
  return (
    <div className="w-[1282px] mx-auto flex">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
}
