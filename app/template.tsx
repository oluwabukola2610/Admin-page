import React, { ReactNode } from "react";
import { ConfigProvider } from "antd";

const template = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#3180E7" , fontFamily: "Archivo"},
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default template;
