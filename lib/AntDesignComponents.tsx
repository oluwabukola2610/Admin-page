"use client";

import {
  Input,
  ConfigProvider,
  Button,
  Checkbox,
  Radio,
  Steps,
  Progress,
  Table,
  DatePicker,
  Tabs,
  Modal,
  Select,
  Drawer,
  Switch,
  InputProps,
  ButtonProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
  StepsProps,
  ProgressProps,
  TableProps,
  DatePickerProps,
  TabsProps,
  ModalProps,
  SelectProps,
  DrawerProps,
  SwitchProps,
} from "antd";
import { TextAreaProps } from "antd/es/input";

export const CustomTabs = ({ ...props }: TabsProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#FFF" },
      components: { Tabs: { inkBarColor: "#000" } },
    }}
  >
    <Tabs {...props} />
  </ConfigProvider>
);

export const CustomInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Input {...props} />
  </ConfigProvider>
);

export const CustomPasswordInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Input.Password {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);
export const CustomTextArea = ({ ...props }: TextAreaProps) => (
  <ConfigProvider>
    <Input.TextArea {...props} />
  </ConfigProvider>
);

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { controlHeight: 45 } }}>
    <Button {...props} />
  </ConfigProvider>
);

export const SuccessButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { colorPrimary: "#10A07C" } }}>
    <Button {...props} />
  </ConfigProvider>
);

export const CustomCheckBox = ({ ...props }: CheckboxProps) => (
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 4,
        padding: 24,
      },
    }}
  >
    <Checkbox {...props} />
  </ConfigProvider>
);

export const RadioButton = ({ ...props }: RadioProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#3180E7",
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "#3180E7",
          buttonSolidCheckedColor: "#3180E7",
          colorBorder: "#3180E7",
          controlHeight: 42,
          padding: 30,
        },
      },
    }}
  >
    {/* <Radio.Group> */}
    <Radio.Button
      style={{
        // ...props.style,
        // margin: "5%",
        borderRadius: 30,
        textAlign: "center",
        color: "#616A6A",
        width: "100%",
      }}
      {...props}
    />
    {/* </Radio.Group> */}
  </ConfigProvider>
);

export const CustomRadio = ({ ...props }: RadioProps) => (
  <ConfigProvider>
    <Radio {...props} />
  </ConfigProvider>
);

export const RadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider theme={{}}>
    <Radio.Group
      {...props}
      style={{
        // margin: "5%",
        borderRadius: 30,
        textAlign: "center",
        color: "#616A6A",
        // display: "grid",
        // gridTemplateColumns: 7,
      }}
    />
  </ConfigProvider>
);

export const CustomSteps = ({ ...props }: StepsProps) => (
  <ConfigProvider>
    <Steps {...props} />
  </ConfigProvider>
);

export const CustomProgress = ({ ...props }: ProgressProps) => (
  <ConfigProvider>
    <Progress {...props} />
  </ConfigProvider>
);

export const CustomTable = ({ ...props }: TableProps<any>) => (
  <ConfigProvider>
    <Table {...props} />
  </ConfigProvider>
);

export const CustomDatePicker = ({ ...props }: DatePickerProps) => (
  <ConfigProvider>
    <DatePicker {...props} />
  </ConfigProvider>
);

export const CustomModal = ({ ...props }: ModalProps) => (
  <ConfigProvider>
    <Modal centered maskClosable={false} {...props} />
  </ConfigProvider>
);

export const CustomSelect = ({ ...props }: SelectProps) => (
  <ConfigProvider>
    <Select {...props} />
  </ConfigProvider>
);

export const CustomDrawer = ({ ...props }: DrawerProps) => (
  <ConfigProvider>
    <Drawer closable {...props} />
  </ConfigProvider>
);

export const CustomSwitch = ({ ...props }: SwitchProps) => (
  <ConfigProvider>
    <Switch {...props} />
  </ConfigProvider>
);
export const customDrawer = ({ ...props }: DrawerProps) => (
  <ConfigProvider>
    <Drawer {...props} />
  </ConfigProvider>
);
