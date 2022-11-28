import { createStore } from 'vuex'

export default createStore({
  state: {

    quantItems: 0,
    carrrinhoDelivery: 
    [],
       
  },
  
  getters: {

    precoTotal(state){
        return state.carrrinhoDelivery.reduce( (total, item) => (total += (item.priceProduct * item.quantityProduct)), 0)
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

    adicionarProducAction(context, data){
        context.commit('addProductInCar', data)
    }

  },

  modules: {

  }
})
