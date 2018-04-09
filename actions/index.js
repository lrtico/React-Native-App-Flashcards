export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function fetchAllDecks (decks) {
  return {
    type: FETCH_DECKS,
    decks
  }
}

export function addDeck (deck) {
  console.log('Deck argument: ', deck)
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard (card) {
  console.log('Card: ', card)
  return {
    type: ADD_CARD,
    card
  }
}
