interface Props {
  color?: string;
}

export const Arrow = ({ color = "white" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="46"
      viewBox="0 0 26 46"
      fill="none"
    >
      <path
        d="M22.9997 43L5.82812 25.8284C4.4948 24.4951 3.82812 23.8284 3.82812 23C3.82812 22.1716 4.49479 21.5049 5.82812 20.1716L22.9997 3"
        stroke={color}
        stroke-width="6"
        stroke-linejoin="round"
      />
    </svg>
  );
};
