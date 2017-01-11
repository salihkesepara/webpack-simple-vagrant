export const SAVE_TODO = 'SAVE_TODO'

export function saveTodo(payload) {
	return {
		type: SAVE_TODO,
		payload
	}
}
