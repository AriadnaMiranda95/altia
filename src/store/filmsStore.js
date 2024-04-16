import API from '../services/api/films'

export default {
  namespaced: true,
  actions: {
    async getFilms({ commit }, payload) {      
      try {
        commit('clearRecords')
        commit('setLoading', true)
        const { data } = await API.getFilms(payload)
        if (data.Search) commit('setFilms', data.Search)
      } catch (error) {
        console.log('error', error)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  state: {
    films: [],
    loading:  false,
  },
  getters: {
    films(state) {
      return state.films
    },
    loading(state) {
      return state.loading
    }
  },

  mutations: {
    setFilms(state, payload) {
      state.films = [...payload]
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    clearRecords(state) {
      state.films = []
    }
  }
}
