import { IconType } from "./type";

const UpArrow = ({ className }: IconType) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.74325 15.41L12.3333 10.83L16.9233 15.41L18.3333 14L12.3333 8L6.33325 14L7.74325 15.41Z"
        fill="#3180E7"
      />
    </svg>
  );
};

export default UpArrow;
