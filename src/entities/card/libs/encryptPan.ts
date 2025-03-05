// Example: 1234123456787890123 --> 4177*****1157882

export function encryptCardPAN(pan: string) {
  const card = pan.split("=")[0];

  return card.slice(0, 4) + "*".repeat(5) + card.slice(-7);
}
