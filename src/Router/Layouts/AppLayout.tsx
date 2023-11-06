import { Outlet } from "react-router-dom";
import { useAuth } from "../../app/hooks/useAuth";

export function AppLayout() {
  const { signout } = useAuth();

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "20%", height: "100vh", background: "#ccc" }}>
        <span onClick={signout}>menu lateral</span>
      </div>

      <div style={{ width: "80%" }}>
        <div style={{ width: "100%", height: 20, background: "#333" }}>
          <span>header</span>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
