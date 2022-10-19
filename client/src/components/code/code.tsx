import React from "react";
import trpc from "@/services/trpc";
import { FinishCodeDigit } from "@/pages/finish/finish.styles";

export default function Code() {
  const getRandomCode = trpc.useQuery(["getRandomCode"], {
    retry: false,
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });

  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setForceShow(true);
    }, 3000);
    if (getRandomCode.data !== undefined) {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [getRandomCode.data]);

  const digits = React.useMemo<number[]>(() => {
    if (forceShow || getRandomCode.data === undefined) {
      return [1, 7, 9, 0];
    }
    return getRandomCode.data;
  }, [forceShow, getRandomCode.data]);

  if (!forceShow && getRandomCode.isLoading) {
    return <></>;
  }

  return (
    <>
      {digits.map((digit, index) => {
        return <FinishCodeDigit key={index}>{digit}</FinishCodeDigit>;
      })}
      <FinishCodeDigit>#</FinishCodeDigit>
    </>
  );
}
