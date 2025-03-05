export function convertSeconds(secunds: number) {
  const date = new Date(1970, 0, 0, 0, 0, +secunds || 0);
  const time = date.toLocaleTimeString("ru", {
    minute: "2-digit",
    second: "2-digit",
  });

  return time;
}
