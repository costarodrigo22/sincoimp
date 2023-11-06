import { Outlet } from "react-router-dom";
import LateralMenu from "../../global/components/LateralMenu";

export function AppLayout() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <LateralMenu />

      <div style={{ width: "100%" }}>
        <div style={{ width: "100%", height: 20, background: "#333" }}>
          <span>header</span>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
