import { dicesMock } from "./mock/dice";

export function getInfraDice(setDices: (dices: number[]) => void) {
  setDices(dicesMock);
}
