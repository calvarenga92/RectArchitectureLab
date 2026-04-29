import { Outlet } from "react-router-dom";
import { ShellLayout } from "@/shell/layout/ShellLayout";

export default function App() {
  return (
    <ShellLayout>
      <Outlet />
    </ShellLayout>
  );
}