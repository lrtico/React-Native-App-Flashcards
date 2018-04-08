import { FETCH_DECKS } from '../actions'
import { ADD_DECK } from '../actions'

const initialState = [
    {
      'id': '1',
      'title': 'React',
      'subtitle': "It's just JavaScript",
    },
    {
      'id': '2',
      'title': 'JavaScript',
      'subtitle': 'Making the dollar hollar',
    },
    {
      'id': '3',
      'title': 'Sass',
      'subtitle': 'Syntastically awesome style sheets',
    },
  ]

export default ( state = initialState, action ) => {
  const { decks } = action
  console.log('reducer test', action)
  console.log('ADD_DECK', ADD_DECK)
  switch(action.type) {
    case FETCH_DECKS :
      return {
        decks
      }
    case ADD_DECK :
      console.log('reducer', action)
      return [
        ...state,
        action.deck
      ]
    default :
      return state
  }
}
