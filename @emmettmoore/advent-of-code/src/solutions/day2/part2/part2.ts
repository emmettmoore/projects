import _ from 'lodash';

import {
  getMyChoiceFromOutcomeAndOpponentChoice,
  plannedOutcomeInputToOutcome,
  getOutcomeBonus,
  getChoiceBonus,
  opponentInputToChoice,
} from '../utils';
import getData from '../getData';

export default async (): Promise<number> => {
  const data = getData();
  const allScores = data.map(([opponentInput, myInput]) => {
    const opponentChoice = opponentInputToChoice(opponentInput);
    const outcome = plannedOutcomeInputToOutcome(myInput);
    const myChoice = getMyChoiceFromOutcomeAndOpponentChoice(
      outcome,
      opponentChoice
    );
    const outcomeBonus = getOutcomeBonus(outcome);
    const choiceBonus = getChoiceBonus(myChoice);
    return outcomeBonus + choiceBonus;
  });

  return _.sum(allScores);
};
