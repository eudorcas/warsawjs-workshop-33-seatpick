import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    reservedSeats: ['A1', 'B2', 'E4']
}

const mutations = { //bezpośrednie operacje na statcie
    'RESERVE_SEAT' (state, payload) {
        state.reservedSeats = payload
    }
}

const actions = { //logika
    collectReservedSeats({commit, state}, payload) {
        const updatedSeats = state.reservedSeats.concat(payload);
        commit('RESERVE_SEAT', updatedSeats)
    }
}

const getters = { //pobieranie aktualnego stanu
    getReservedSeats: state => state.reservedSeats
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})