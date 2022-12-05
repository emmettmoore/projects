import { InvalidParsingError } from '../../errors';

export enum Choice {
  Rock = `Rock`,
  Paper = `Paper`,
  Scissors = `Scissors`,
}

export enum Outcome {
  Win = `Win`,
  Draw = `Draw`,
  Loss = `Loss`,
}

/*
 * OPTION     ME        OPPONENT   CHOICE BONUS
 * Rock       X         A          1
 * Paper      Y         B          2
 * Scissors   Z         C          3
 */

export const opponentInputToChoice = (opponentInput: string): Choice => {
  if (opponentInput === `A`) {
    return Choice.Rock;
  }
  if (opponentInput === `B`) {
    return Choice.Paper;
  }

  if (opponentInput === `C`) {
    return Choice.Scissors;
  }

  throw new InvalidParsingError();
};

export const myInputToChoice = (myInput: string): Choice => {
  if (myInput === `X`) {
    return Choice.Rock;
  }
  if (myInput === `Y`) {
    return Choice.Paper;
  }

  if (myInput === `Z`) {
    return Choice.Scissors;
  }

  throw new InvalidParsingError();
};

export const getOutcome = (opponent: Choice, me: Choice): Outcome => {
  const mapping: { [myKey in Choice]: { [opponentKey in Choice]: Outcome } } = {
    [Choice.Rock]: {
      [Choice.Rock]: Outcome.Draw,
      [Choice.Paper]: Outcome.Loss,
      [Choice.Scissors]: Outcome.Win,
    },
    [Choice.Paper]: {
      [Choice.Rock]: Outcome.Win,
      [Choice.Paper]: Outcome.Draw,
      [Choice.Scissors]: Outcome.Loss,
    },
    [Choice.Scissors]: {
      [Choice.Rock]: Outcome.Loss,
      [Choice.Paper]: Outcome.Win,
      [Choice.Scissors]: Outcome.Draw,
    },
  };
  return mapping[me][opponent];
};

export const getOutcomeBonus = (outcome: Outcome): number => {
  const mapping: { [key in Outcome]: number } = {
    [Outcome.Loss]: 0,
    [Outcome.Draw]: 3,
    [Outcome.Win]: 6,
  };

  return mapping[outcome];
};

export const getChoiceBonus = (choice: Choice): number => {
  const mapping: { [key in Choice]: number } = {
    [Choice.Rock]: 1,
    [Choice.Paper]: 2,
    [Choice.Scissors]: 3,
  };

  return mapping[choice];
};
