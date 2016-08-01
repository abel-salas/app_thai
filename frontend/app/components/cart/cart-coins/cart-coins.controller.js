/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */


class CartCoinsController {
  constructor (ProductService, $scope, $state) {

  }

  submitForm(product){

  }

  ifEmpty(value) {
      switch (value !== '' && value !== undefined){
          case true: return 'active';
      }
  }

  toAddNumber() {
      let coins = this.currency.coin;
      this.totalCoins = coins.dime + coins.quarter + coins.halfEuro + coins.oneEuro + coins.twoEuro;

      let dollars =
      this.totalDollars = dollars.five + dollars.ten + dollars.twenty + dollars.fifty + dollars.hundred;
  }

}

export default CartCoinsController
