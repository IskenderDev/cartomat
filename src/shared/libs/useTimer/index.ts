export const startTimer = (onAction: () => void, timer?: number) => {
  return setTimeout(onAction, timer || 10000);
};
