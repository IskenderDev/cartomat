interface Props {
    color?: string;
    opacity?: number;
  }
  
  export const CreditCard = ({ color = "#F7C21C", opacity = 0.15 }: Props) => {
    return (
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16C0 7.16344 7.16344 0 16 0H54C62.8366 0 70 7.16344 70 16V54C70 62.8366 62.8366 70 54 70H16C7.16344 70 0 62.8366 0 54V16Z"
          fill={color}
          fillOpacity={opacity}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 24.5C14 22.0147 16.0147 20 18.5 20H51.5C53.9854 20 56 22.0147 56 24.5V26H14V24.5ZM14 29H56V45.5C56 47.9853 53.9854 50 51.5 50H18.5C16.0147 50 14 47.9853 14 45.5V29ZM38 39.5C37.1716 39.5 36.5 40.1716 36.5 41C36.5 41.8284 37.1716 42.5 38 42.5H47C47.8284 42.5 48.5 41.8284 48.5 41C48.5 40.1716 47.8284 39.5 47 39.5H38Z"
          fill={color}
        />
      </svg>
    );
  };