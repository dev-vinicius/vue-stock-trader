export default {
    loadData({ commit }){
        const data = localStorage.getItem('data')
        if (data) {
            const localData = JSON.parse(data)
            commit('setStocks', localData.stocks)
            commit('setPortifolio', {
                funds: localData.funds,
                stockPortifolio: localData.stockPortifolio
            })
        }
    }
}