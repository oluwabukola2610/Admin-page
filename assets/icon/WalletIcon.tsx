import { IconType } from "./type";

const WalletIcon = ({ className }: IconType) => {
  return (
    <svg
      className={className}
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
        fill="#FDB528"
        fill-opacity="0.12"
      />
      <path d="M24 20.5H26V24.5H24V20.5Z" fill="#FFAB00" />
      <path
        d="M28 15.5V13.5C28 12.397 27.103 11.5 26 11.5H13C11.346 11.5 10 12.846 10 14.5V26.5C10 28.701 11.794 29.5 13 29.5H28C29.103 29.5 30 28.603 30 27.5V17.5C30 16.397 29.103 15.5 28 15.5ZM13 13.5H26V15.5H13C12.7425 15.4885 12.4994 15.3781 12.3213 15.1918C12.1431 15.0055 12.0437 14.7577 12.0437 14.5C12.0437 14.2423 12.1431 13.9945 12.3213 13.8082C12.4994 13.6219 12.7425 13.5115 13 13.5ZM28 27.5H13.012C12.55 27.488 12 27.305 12 26.5V17.315C12.314 17.428 12.647 17.5 13 17.5H28V27.5Z"
        fill="#FFAB00"
      />
    </svg>
  );
};

export default WalletIcon;
