import { CartomatApi } from "../model";

export async function captureCard() {
  try {
    await CartomatApi.retrieve();
  } catch (error) {
    console.error("Error when returning the card", error);
  }

  try {
    await CartomatApi.capture();
  } catch (error) {
    console.error("Error when capturing the card", error);
  }
}
