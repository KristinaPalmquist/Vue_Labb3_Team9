import { createStore } from 'vuex'
import moment from "moment/min/moment-with-locales";

const mutations = {
    increment(state) {
        state.date += moment(1).lang("sv").dayOfYear()
        state.datefixed = moment(state.datefixed).lang("sv").add(1, "days").format("LL")
    },
    previous(state) {
        state.date -= moment(1).lang("sv").dayOfYear()
        state.datefixed = moment(state.datefixed).lang("sv").subtract(1, "days").format("LL")
    }
},

    state = {
        date: moment().dayOfYear(),
        datefixed: moment().lang("sv").format("LL"),
    }

export default createStore({ mutations, state, strict: true })
