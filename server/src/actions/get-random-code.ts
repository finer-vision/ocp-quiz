import * as fs from "fs";
import * as trpc from "@trpc/server";
import { type RequestInit } from "node-fetch";
import { type AppContext } from "../services/app";
import config from "../config";
import { generateRandomDigits, getWinningCode } from "../../utils";

const getRandomCode = trpc.router<AppContext>().query("getRandomCode", {
  async resolve() {
    const { default: fetch, FormData } = await import("node-fetch");

    if (!fs.existsSync(config.usedCodeIdsFilePath)) {
      fs.writeFileSync(config.usedCodeIdsFilePath, JSON.stringify([]), "utf-8");
    }

    const usedCodeIds: number[] = JSON.parse(
      fs.readFileSync(config.usedCodeIdsFilePath, "utf-8")
    );

    // Remove codes that have already been used
    const winningCodes = config.winningCodes.filter((winningCode) => {
      return !usedCodeIds.includes(winningCode.id);
    });

    const winningCode = getWinningCode(winningCodes);

    // No win, return a randomly generated code
    if (winningCode === null) {
      return generateRandomDigits();
    }

    // Send the winning code to the hardware so the safe can be unlocked
    const formData = new FormData();
    formData.set("new_code", winningCode.digits.join(""));
    const init: RequestInit = {
      method: "POST",
      body: formData,
    };
    fetch(`${config.apiUrl}/code`, init)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));

    // Store used winning code id
    usedCodeIds.push(winningCode.id);
    fs.writeFileSync(
      config.usedCodeIdsFilePath,
      JSON.stringify(usedCodeIds),
      "utf-8"
    );

    // Win! Return the winning code
    return winningCode.digits;
  },
});

export default getRandomCode;
