import Immutable from 'immutable'
import { PENDING, SUCCESS, FAILURE } from '../const'
import { SAVE_TODO } from '../actions/Todo'

const initialState = {
	status: null, payload: {}
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SAVE_TODO:
			return Immutable.fromJS(state).merge({
				status: SUCCESS,
				payload: action.payload
			}).toJS()
			
		default:
			return state
	}
}