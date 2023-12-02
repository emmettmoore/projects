import _ from 'lodash';

import {
  getOutcome,
  getOutcomeBonus,
  getChoiceBonus,
  myInputToChoice,
  opponentInputToChoice,
} from '../utils';
import getData from '../getData';

export default async (): Promise<number> => {
  const data = getData();
  const allScores = data.map(([opponentInput, myInput]) => {
    const opponentChoice = opponentInputToChoice(opponentInput);
    const myChoice = myInputToChoice(myInput);

    const outcome = getOutcome(opponentChoice, myChoice);
    const outcomeBonus = getOutcomeBonus(outcome);
    const choiceBonus = getChoiceBonus(myChoice);
    return outcomeBonus + choiceBonus;
  });

  return _.sum(allScores);
};
