export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function fetchAllDecks (decks) {
  return {
    type: FETCH_DECKS,
    decks
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function deleteDeck (deckId) {
  console.log('Delete deck passing: ', deckId)
  return {
    type: DELETE_DECK,
    deckId
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card
  }
}
