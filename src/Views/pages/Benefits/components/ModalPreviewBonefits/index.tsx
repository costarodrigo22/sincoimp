import { Button } from "../../../../../global/layouts/Button";
import { IconDisplay } from "../../../../../global/components/IconDisplay";
import * as RadixIcons from "@radix-ui/react-icons";
import rocketIcon from "../../../../../assets/Icons/rocket_icon.svg";
import adjustIcon from "../../../../../assets/Icons/adjust_icon.svg";
import { PulseLoader } from "react-spinners";

type RadixIconNames = keyof typeof RadixIcons;

interface ModalPreviewBonefitsProps {
  image: string | null;
  title: string;
  isLoading: boolean;
  description: string;
  topics: {
    title: string;
    icon: string;
  }[];
  onSubmit: () => void;
}

export default function ModalPreviewBonefits({
  image,
  title,
  description,
  topics,
  isLoading,
  onSubmit,
}: ModalPreviewBonefitsProps) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          height: 400,
          backgroundImage: image ? `url(${image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div style={{ width: "50%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 30, fontWeight: 500 }}>{title}</span>

          <small>{description}</small>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: 50,
            overflow: "auto",
            height: 250,
          }}
        >
          {topics?.map((item, index) => (
            <div style={{ display: "flex" }} key={index}>
              {/* <span style={{ marginRight: 10 }}>{item.icon}</span> */}
              <IconDisplay selectedIcon={item.icon as RadixIconNames} />
              <span style={{ marginLeft: 10 }}>{item.title}</span>
            </div>
          ))}
        </div>

        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button.Wrapper
            style={{
              width: 125,
              height: 35,
              background: "#D9D9D9",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled={false}
          >
            <Button.Icon icon={adjustIcon} />
            <Button.Label
              style={{ fontSize: 12, color: "#000", marginLeft: 10 }}
            >
              Ajustar
            </Button.Label>
          </Button.Wrapper>

          <Button.Wrapper
            style={{
              width: 125,
              height: 35,
              background: "#06f",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
            disabled={false}
            onClick={onSubmit}
          >
            {isLoading && <PulseLoader color="#fff" size={5} />}

            {!isLoading && (
              <>
                <Button.Icon icon={rocketIcon} />
                <Button.Label
                  style={{ fontSize: 12, color: "#fff", marginLeft: 10 }}
                >
                  Públicar
                </Button.Label>
              </>
            )}
          </Button.Wrapper>
        </div>
      </div>
    </div>
  );
}
