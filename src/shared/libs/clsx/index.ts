/* eslint-disable prefer-const */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line no-undef
function toVal(mix: clsx.ClassValue): string {
  if (
    typeof mix === "string" ||
    typeof mix === "number" ||
    typeof mix === "bigint"
  ) {
    return `${mix}`;
  }
  if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      return mix.map(toVal).filter(Boolean).join(" ");
    }
    if (mix !== null) {
      return Object.keys(mix)
        .filter((k) => mix[k])
        .join(" ");
    }
  }
  return "";
}
// eslint-disable-next-line no-undef
export function clsx(...inputs: clsx.ClassValue[]): string {
  let i = 0;
  let tmp;
  let x;
  let str = "";
  let len = inputs.length;
  for (; i < len; i++) {
    if ((tmp = inputs[i])) {
      if ((x = toVal(tmp))) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

export default clsx;
