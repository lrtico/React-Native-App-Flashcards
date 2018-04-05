const FETCH_DECKS = 'FETCH_DECKS'

export function fetchAllDecks (decks) {
  return {
    type: FETCH_DECKS,
    decks
  }
}
