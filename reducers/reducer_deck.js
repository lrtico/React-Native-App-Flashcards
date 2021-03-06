import { FETCH_DECKS } from '../actions'
import { ADD_DECK } from '../actions'
import { DELETE_DECK } from '../actions'
import { ADD_CARD } from '../actions'
import { randomId } from '../utils/helpers'

const initialState = [
    {
      'id': randomId(),
      'title': 'React',
      'subtitle': "It's just JavaScript",
      questions: [
        {
          id: randomId(),
          'question': 'Who created React.js?',
          'answer': 'Facebook engineers.',
        },
        {
          id: randomId(),
          'question': 'Why is React.js popular?',
          'answer': 'Because the way it creates a virtual DOM which impacts performance.',
        },
      ],
    },
    {
      'id': randomId(),
      'title': 'JavaScript',
      'subtitle': 'Making the dollar hollar',
      questions: [
        {
          id: randomId(),
          'question': 'What is JavaScript?',
          'answer': 'It is a scripting language commonly used to create interactions in web browsers.',
        },
        {
          id: randomId(),
          'question': 'Is JS an object-oriented language?',
          'answer': 'Yes',
        },
      ],
    },
    {
      'id': randomId(),
      'title': 'Sass',
      'subtitle': 'Syntastically awesome style sheets',
      questions: [
        {
          id: randomId(),
          'question': 'How do mixins help?',
          'answer': 'Mixins automate front-end development.',
        },
        {
          id: randomId(),
          'question': 'What does the "&" do?',
          'answer': 'The almight parent selector.',
        },
      ],
    },
  ]

export default ( state = initialState, action ) => {
  const { decks } = action
  switch(action.type) {
    case FETCH_DECKS :
      return {
        decks
      }
    case ADD_DECK :
      return [
        ...state,
        action.deck
      ]
    case DELETE_DECK :
      return state.filter(deck => deck.id !== action.deckId)
    case ADD_CARD :
      const deckId = action.card.deckId
      return state.map(deck => {
        if(deck.id === deckId) {
          return {
             ...deck,
             questions: [
               ...deck.questions,
               {
                 id: action.card.id,
                 question: action.card.question,
                 answer: action.card.answer
               }
             ]
          }
        } else {
          return deck;
        }
      })
    default :
      return state
  }
}
