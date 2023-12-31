import { Outlet, useLocation } from "react-router-dom";
import LateralMenu from "../../global/components/LateralMenu";
import { useTheme } from "../../theme/useTheme";

export function AppLayout() {
  const theme = useTheme();

  const location = useLocation();

  const locationPreparation = location.pathname.split("/");

  const locationCaptalized = locationPreparation.map((item) => {
    return item.charAt(0).toLocaleUpperCase() + item.slice(1);
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <LateralMenu />

      <div
        style={{
          width: "100%",
          overflowY: "auto",
          background: theme.colors.context.wrapper,
        }}
      >
        <div style={{ width: "100%", height: 20, padding: "20px 30px" }}>
          <span>{locationCaptalized}</span>
        </div>

        <div style={{ padding: 30 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
