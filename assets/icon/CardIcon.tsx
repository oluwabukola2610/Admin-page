import { IconType } from "./type";

const CardIcon = ({ className }: IconType) => {
  return (
    <svg
      className={className}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="42" height="42" rx="6" fill="#666CFF" fill-opacity="0.12" />
      <g clip-path="url(#clip0_206_7513)">
        <path d="M32.6666 17H9.33325V19.3333H32.6666V17Z" fill="#C1C0FF" />
        <path
          d="M29.1666 12.3335H12.8333C10.9026 12.3391 9.33888 13.9028 9.33325 15.8335V17.0002H32.6666V15.8335C32.661 13.9028 31.0972 12.3391 29.1666 12.3335ZM9.33325 26.3335C9.33895 28.2642 10.9026 29.8278 12.8333 29.8335H29.1666C31.0972 29.8278 32.6609 28.2642 32.6666 26.3335V19.3335H9.33325V26.3335Z"
          fill="#A2A1FF"
        />
        <path
          d="M18.6667 23.9998H15.1667C14.5223 23.9998 14 23.4775 14 22.8332C14 22.1888 14.5223 21.6665 15.1667 21.6665H18.6667C19.311 21.6665 19.8333 22.1888 19.8333 22.8332C19.8333 23.4775 19.311 23.9998 18.6667 23.9998Z"
          fill="#3180E7"
        />
      </g>
      <defs>
        <clipPath id="clip0_206_7513">
          <rect
            width="24"
            height="17"
            fill="white"
            transform="translate(9 12.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CardIcon;
