import { IconType } from "./type";

const RightArrow = ({ className }: IconType) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="4" fill="#FDB528" fill-opacity="0.12" />
      <path
        d="M18.061 27.061L25.121 20L18.061 12.939L15.939 15.061L20.879 20L15.939 24.939L18.061 27.061Z"
        fill="#FFAB00"
      />
    </svg>
  );
};

export default RightArrow;
