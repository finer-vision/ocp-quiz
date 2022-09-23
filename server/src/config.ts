import * as path from "path";
import { WinningCode } from "./types";

type Config = {
  usedCodeIdsFilePath: string;
  apiUrl: string;
  winningCodes: WinningCode[];
};

const localTimeZoneOffset = -7;

const config: Config = {
  usedCodeIdsFilePath: path.resolve(
    __dirname,
    "..",
    "storage",
    "used-code-ids.json"
  ),
  apiUrl: "http://localhost:8888",
  winningCodes: [
    // Day 1 – morning win
    {
      id: 1,
      digits: [9, 6, 8, 1],
      validAfter: new Date(
        Date.UTC(2022, 9, 18, 9 + localTimeZoneOffset, 30, 0)
      ),
    },
    // Day 1 – afternoon win
    {
      id: 2,
      digits: [2, 8, 4, 1],
      validAfter: new Date(
        Date.UTC(2022, 9, 18, 15 + localTimeZoneOffset, 0, 0)
      ),
    },
    // Day 2 – morning win
    {
      id: 3,
      digits: [1, 0, 1, 5],
      validAfter: new Date(
        Date.UTC(2022, 9, 19, 10 + localTimeZoneOffset, 25, 0)
      ),
    },
    // Day 2 – afternoon win
    {
      id: 4,
      digits: [8, 4, 8, 8],
      validAfter: new Date(
        Date.UTC(2022, 9, 19, 14 + localTimeZoneOffset, 35, 0)
      ),
    },
    // Day 3 – morning win
    {
      id: 5,
      digits: [2, 6, 6, 4],
      validAfter: new Date(
        Date.UTC(2022, 9, 20, 8 + localTimeZoneOffset, 45, 0)
      ),
    },
    // Day 3 – afternoon win
    {
      id: 6,
      digits: [4, 8, 5, 0],
      validAfter: new Date(
        Date.UTC(2022, 9, 20, 14 + localTimeZoneOffset, 55, 0)
      ),
    },
  ],
};

export default config;
