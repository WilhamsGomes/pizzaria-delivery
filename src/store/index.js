import { createStore } from 'vuex'

export default createStore({
  state: {
    quantItems: 0,
    carrrinhoDelivery: [
    ],
       
  },
  
  getters: {

    precoTotal(state){
        return state.carrrinhoDelivery.reduce( (total, item) => (total += (item.priceProduct * item.quantityProduct)).toFixed(2), 0)
    },

  },

  mutations: {

    addProductInCar(state, data){
      const dados = data
      state.quantItems += dados.quantityProduct
      state.carrrinhoDelivery.push(dados)
    },

    limparCarrinho(state){
      state.quantItems = 0
      state.carrrinhoDelivery = []
    }

  },

  actions: {

  },

  modules: {

  }
})
