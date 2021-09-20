import store from '~/store';
import { cardStatus } from '~/enum/cardStatus';
import { difficulties } from '~/enum/difficulty';
import { setCards } from '~/store/reducers/game';
import { shuffleArray } from '~/utils/array';
import { socialCards } from './cardsController';

function formatCards(cardImages) {
  return cardImages.map((item, index) => ({
    image: item,
    status: cardStatus.SHOWED,
    id: index,
  }));
}

export function startGame(difficulty) {
  let cards;
  const cardImages = shuffleArray(socialCards);

  switch (difficulty) {
    case difficulties.LOW:
      cards = formatCards(cardImages.slice(0, 8));
      break;
    case difficulties.MEDIUM:
      cards = formatCards(cardImages.slice(0, 10));
      break;
    case difficulties.HARD:
      cards = formatCards(cardImages.slice(0, 12));
      break;
    default:
      break;
  }

  store.dispatch(setCards(shuffleArray([...cards, ...cards])));
}

export function HideAllCards(cards) {
  store.dispatch(
    setCards(cards.map((item) => ({ ...item, status: cardStatus.HID }))),
  );
}
