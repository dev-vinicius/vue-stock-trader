<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase mr-4">
        <span>Stock</span>
        <span class="font-weight-light">Trader</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/">Início</v-btn>
        <v-btn text to="/portifolio">Portifólio</v-btn>
        <v-btn text to="/stocks">Stocks</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="endDay">Finalizar Dia</v-btn>
        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Salvar & Carregar Dados</v-btn>
          </template>
          
          <v-list>
            <v-list-item @click="saveData">
              <v-list-item-title>Salvar Dados</v-list-item-title>
            </v-list-item>
            <v-list-item @click="loadData">
              <v-list-item-title>Carregar Dados</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-layout align-center>
          <span class="text-uppercase grey--text text--darken-2">
            Saldo: {{ funds | currency }}
          </span>
        </v-layout>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions(['randomizeStocks', 'loadData']),
    endDay(){
      this.randomizeStocks()
    },
    saveData(){
      const { funds, stockPortifolio, stocks } = this.$store.getters
      const data = JSON.stringify({ funds, stockPortifolio, stocks })
      localStorage.setItem('data', data)
    }
  }
};
</script>

<style scoped>
</style>