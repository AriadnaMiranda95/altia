import API from '../services/api/films'

export default {
  namespaced: true,
  actions: {
    async getFilms({ commit }, payload) {
      try {
        const { data } = await API.getFilms(payload)
        commit('setFilms', data.Search)
      } catch (error) {
        console.log('error', error)
      }
    }
  },
  state: {
    films: []
  },
  getters: {
    films(state) {
      console.log(state.films)
      return state.films
    }
  },
  mutations: {
    setFilms(state, payload) {
      state.films = [...payload]
    }
  }
}
