import { delay } from "shared/libs/delay";
import { CardMachineMessages } from "entities/cartomat/model/card-machine-messages";
import { CartomatApi } from "entities/cartomat/model";

// TODO - Добавить обработку для readCard (он может вернуть 200, но не сможет прочитать карту)
export async function giveRequiredCard(box: number) {
  try {
    await CartomatApi.giveCard(box);
  } catch (error) {
    console.error("Ошибка при выдаче карты:", error);
  }

  await delay(2_000);

  try {
    const { data } = await CartomatApi.readCard(2);

    if (!data || data.message === CardMachineMessages.ReadingError) {
      giveRequiredCard(box);
    }

    return data;
  } catch (error) {
    console.error("Ошибка при считывании карты:", error);
  }
}
