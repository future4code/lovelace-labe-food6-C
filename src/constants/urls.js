export const url = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB'
export const token = localStorage.getItem('token')
export const headers = {
	headers: {
		auth: token
	}
}