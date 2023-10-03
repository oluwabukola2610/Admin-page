import { IconType } from "./type";

const YenIcon = ({ className }: IconType) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="4" fill="#72E128" fill-opacity="0.12" />
      <path
        d="M23.999 16.5H25.999C25.999 13.663 23.244 12.369 20.999 12.071V10H18.999V12.071C16.754 12.369 13.999 13.663 13.999 16.5C13.999 19.206 16.665 20.613 18.999 20.93V25.9C17.551 25.649 15.999 24.876 15.999 23.5H13.999C13.999 26.089 16.424 27.619 18.999 27.936V30H20.999V27.93C23.244 27.632 25.999 26.337 25.999 23.5C25.999 20.663 23.244 19.369 20.999 19.071V14.1C22.329 14.339 23.999 15.041 23.999 16.5ZM15.999 16.5C15.999 15.041 17.669 14.339 18.999 14.1V18.899C17.628 18.646 15.999 17.897 15.999 16.5ZM23.999 23.5C23.999 24.959 22.329 25.661 20.999 25.9V21.1C22.329 21.339 23.999 22.041 23.999 23.5Z"
        fill="#71DD37"
      />
    </svg>
  );
};

export default YenIcon;