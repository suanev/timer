import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";

import { CyclesContext } from "../../../../contexts/CyclesContext";
import { CountdownContainer, Separator } from "./styles";

const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60); // arredonda para baixo
  const secondsAmount = currentSeconds % 60; // resto da divisão

  const minutes = String(minutesAmount).padStart(2, "0"); // preenche com 0 se não tiver 2 caracteres no início
  const seconds = String(secondsAmount).padStart(2, "0"); // preenche com 0 se não tiver 2 caracteres no início

  // usado dessa forma porque setInterval é uma função que depende
  // de processamento, então nem sempre devolve um segundo exato
  useEffect(() => {
    let interval: number;

    // calcula a diferença em segundos entre a
    // data atual e a data de início do ciclo
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(totalSeconds);
          clearInterval(interval); // termina o intervalo
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [activeCycle, minutes, seconds]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
};

export default Countdown;
