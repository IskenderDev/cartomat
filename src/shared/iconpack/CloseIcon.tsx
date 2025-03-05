interface Props {
  color?: string;
}

export const CloseIcon = ({ color = "#A9B4BC" }: Props) => {
  return (
    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" width="64" height="64" rx="22" fill="#F4F6F7" />
      <path
        d="M22.5469 22.0469L42.4543 41.9543M22.5469 41.9543L42.4543 22.0469"
        stroke={color}
        stroke-width="3.98148"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
    </svg>
  );
};
