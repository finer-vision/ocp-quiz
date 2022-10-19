import * as path from "path";
import { WinningCode } from "./types";

type Config = {
  usedCodeIdsFilePath: string;
  apiUrl: string;
  winningCodes: WinningCode[];
};

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
      validAfter: new Date(2022, 9, 18, 12, 0, 0),
    },
    // Day 1 – afternoon win
    {
      id: 2,
      digits: [2, 8, 4, 1],
      validAfter: new Date(2022, 9, 18, 17, 0, 0),
    },
    // Day 2 – morning win
    {
      id: 3,
      digits: [1, 0, 1, 5],
      validAfter: new Date(2022, 9, 19, 11, 0, 0),
    },
    // Day 2 – afternoon win
    {
      id: 4,
      digits: [8, 4, 8, 8],
      validAfter: new Date(2022, 9, 19, 16, 0, 0),
    },
    // Day 3 – morning win
    {
      id: 5,
      digits: [2, 6, 6, 4],
      validAfter: new Date(2022, 9, 20, 9, 30, 0),
    },
    // Day 3 – afternoon win
    {
      id: 6,
      digits: [4, 8, 5, 0],
      validAfter: new Date(2022, 9, 20, 12, 0, 0),
    },
  ],
};

export default config;
