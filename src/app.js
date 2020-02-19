import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      object: 0,
      euroInput: 0,
      chosenCurrency: 0,
      backToEuro: 0,
      currencyInput: 0,
    },
    computed: {
      calculate: function(){
        if ( this.euroInput !== null && this.chosenCurrency !== null){
          const result=(this.euroInput / this.chosenCurrency)
         return result.toFixed(2)
        }
      },
      backToEuros: function(){
        if ( this.backToEuro !== null && this.currencyInput !== null){
          const result=(this.backToEuro / this.currencyInput)
         return result.toFixed(2)
        }
      },
    },
    mounted(){
      this.fetchCurrencies()

    },
    methods: {
      fetchCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(object => this.object = object)
      }

    },
  })










});
