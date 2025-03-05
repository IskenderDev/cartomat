interface Props {
  color?: string;
}

export const WalletIcon = ({ color = "#F7C21C" }: Props) => {
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
        fillOpacity="0.15"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.2017 43.182H45.3574C42.21 43.182 39.6593 40.6313 39.6593 37.4839V33.3398C39.6593 30.1924 42.21 27.6417 45.3574 27.6417H55.2017V25.0516C55.2017 23.5411 54.6008 22.0907 53.5337 21.0215C52.4645 19.9544 51.0141 19.3535 49.5036 19.3535C42.3281 19.3535 27.6705 19.3535 20.495 19.3535C18.9845 19.3535 17.534 19.9544 16.4649 21.0215C15.3978 22.0907 14.7969 23.5411 14.7969 25.0516V45.7721C14.7969 47.2826 15.3978 48.733 16.4649 49.8022C17.534 50.8693 18.9845 51.4702 20.495 51.4702H49.5036C51.0141 51.4702 52.4645 50.8693 53.5337 49.8022C54.6008 48.733 55.2017 47.2826 55.2017 45.7721V43.182ZM55.2017 30.7498V40.0739H45.3574C43.9277 40.0739 42.7674 38.9136 42.7674 37.4839V33.3398C42.7674 31.9101 43.9277 30.7498 45.3574 30.7498H55.2017ZM46.3955 33.3398C47.5393 33.3398 48.4676 34.2681 48.4676 35.4118C48.4676 36.5556 47.5393 37.4839 46.3955 37.4839C45.2518 37.4839 44.3235 36.5556 44.3235 35.4118C44.3235 34.2681 45.2518 33.3398 46.3955 33.3398Z"
        fill={color}
      />
    </svg>
  );
};
