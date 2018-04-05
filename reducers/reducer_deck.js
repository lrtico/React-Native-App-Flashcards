import { FETCH_DECKS } from '../actions'

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

  switch(action.type) {
    case FETCH_DECKS :
      return {
        decks
      }
    default :
      return state
  }
}
