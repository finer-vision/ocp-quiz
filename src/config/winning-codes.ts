type WinningCode = {
  digits: number[];
  validAfter: Date;
  used: boolean;
};

const winningCodes: WinningCode[] = [
  {
    digits: [1, 2, 3, 4],
    validAfter: new Date(Date.UTC(2022, 9, 18, 10, 30, 0)),
    used: false,
  },
];

export default winningCodes;
