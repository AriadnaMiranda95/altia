import APIInvoker from './'

const apiKey = import.meta.env.VITE_APP_API_KEY

// async function getFilms(film) {
//   const response = await APIInvoker.get('', { params: { apiKey, s: film } })
// }

const getFilms = async (film) => await APIInvoker.get('', { params: { apiKey, s: film } })

export default { getFilms }
