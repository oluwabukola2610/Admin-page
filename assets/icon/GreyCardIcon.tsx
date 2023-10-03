import { IconType } from "./type";

const GreyCardIcon = ({ className }: IconType) => {
  return (
    <svg
      calcMode={className}
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.5"
        width="40"
        height="40"
        rx="4"
        fill="#6D788D"
        fill-opacity="0.12"
      />
      <path
        d="M28 12.5H12C10.897 12.5 10 13.397 10 14.5V26.5C10 27.603 10.897 28.5 12 28.5H28C29.103 28.5 30 27.603 30 26.5V14.5C30 13.397 29.103 12.5 28 12.5ZM12 14.5H28V16.5H12V14.5ZM12 26.5V20.5H28.001L28.002 26.5H12Z"
        fill="#8592A3"
      />
      <path d="M14 22.5H20V24.5H14V22.5Z" fill="#8592A3" />
    </svg>
  );
};

export default GreyCardIcon;
