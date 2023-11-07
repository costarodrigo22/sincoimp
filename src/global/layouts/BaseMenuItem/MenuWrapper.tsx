import { ReactNode, ComponentProps, useState } from "react";
import { useTheme } from "../../../theme/useTheme";
import { MenuItem } from ".";
import { useNavigate } from "react-router-dom";
import { useLateralMenu } from "../../../app/hooks/useLateralMenu";

interface subMenuProps {
  name: string;
  routePush: string;
}

interface menuWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
  margin_top?: number;
  list_subMenu?: subMenuProps[];
}

export default function MenuWrapper({
  children,
  margin_top,
  list_subMenu,
  ...props
}: menuWrapperProps) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  // const [selectedSubMenu, setSelectedSubMenu] = useState("");

  const theme = useTheme();

  const { onTogglemenu, selected } = useLateralMenu();

  const navigate = useNavigate();

  function handleDropSubMenu() {
    setShowSubMenu(!showSubMenu);
  }

  function handleNavigate(route: string, label: string) {
    navigate(route);

    onTogglemenu(label);
  }

  return (
    <div>
      <div
        {...props}
        onClick={handleDropSubMenu}
        style={{
          background: theme.colors.menu.item,
          borderRadius: "8px",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: margin_top,
          cursor: "pointer",
        }}
      >
        {children}
      </div>

      {showSubMenu && (
        <div
          style={{
            background: theme.colors.menu.item,
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 8,
            paddingBottom: 8,
            marginTop: -5,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          {list_subMenu?.map((subMenu) => (
            <MenuItem.SubItem
              active={selected === subMenu.name}
              key={subMenu.name}
              name={subMenu.name}
              onClick={() => handleNavigate(subMenu.routePush, subMenu.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
