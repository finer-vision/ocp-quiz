import { WinningCode } from "./src/types";

export function generateRandomDigits(total = 4): number[] {
  const digits: number[] = [];
  for (let i = 0; i < total; i++) {
    digits.push(Math.floor(Math.random() * 9));
  }
  return digits;
}

export function getWinningCode(
  winningCodes: WinningCode[]
): WinningCode | null {
  const now = Date.now();
  for (const winningCode of winningCodes) {
    if (now < winningCode.validAfter.getTime()) continue;
    return winningCode;
  }
  return null;
}
