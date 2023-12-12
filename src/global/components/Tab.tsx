import { useState, ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";

interface TabProps {
  triggerList: {
    title: string;
    content: ReactNode;
  }[];
}

export default function Tab({ triggerList }: TabProps) {
  const [tabActive, setTabActive] = useState(triggerList[0].title);

  function handleToggleTab(tab: string) {
    setTabActive(tab);
  }

  return (
    <Tabs.Root defaultValue={tabActive}>
      <Tabs.List style={{ borderBottom: "1px solid #ccc" }}>
        {triggerList?.map((item) => (
          <Tabs.Trigger
            key={item.title}
            style={{
              fontSize: 12,
              paddingBottom: 8,
              marginRight: 20,
              borderBottom:
                tabActive === item.title ? "2px solid #0066FF" : "none",
              outline: "none",
            }}
            value={item.title}
            onClick={() => handleToggleTab(item.title)}
          >
            {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {triggerList?.map((item) => (
        <Tabs.Content key={item.title} value={item.title}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
