import store from '~/store';
import { cardStatus } from '~/enum/cardStatus';
import { difficulties } from '~/enum/difficulty';
import { addToMatch, setCards } from '~/store/reducers/game';
import { shuffleArray } from '~/utils/array';
import { socialCards } from './cardsController';

function formatCards(cardImages) {
  return cardImages.map((item, index) => ({
    image: item,
    status: cardStatus.HID,
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

export function showAllCards(cards) {
  store.dispatch(
    setCards(cards.map((item) => ({ ...item, status: cardStatus.SHOWED }))),
  );
}

export function hideAllCards(cards) {
  store.dispatch(
    setCards(cards.map((item) => ({ ...item, status: cardStatus.HID }))),
  );
}

export function pressCard(index) {
  const { cards, match } = store.getState().game;
  const showed = cardStatus.SHOWED;
  if (cards[index].status === showed) return;
  if (match.length > 1) return;
  store.dispatch(addToMatch({ index, card: cards[index] }));
}
