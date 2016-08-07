/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */


class CartCoinsController {
    constructor(CoinsService, $log, CartService) {
        this.CoinsService = CoinsService;
        this.$log = $log;
        this.CartService = CartService;
    }

    ifEmpty(value) {
        switch (value !== '' && value !== undefined) {
            case true:
                return 'active';
        }
    }

    toAddNumberCoins() {
        this.totalCoins = 0;
        let dimeT = parseInt(this.currency.coins.dime) * 0.10;
        let quarterT = parseInt(this.currency.coins.quarter) * 0.20;
        let halfEuroT = parseInt(this.currency.coins.halfEuro) * 0.50;
        let oneEuroT = parseInt(this.currency.coins.oneEuro);
        let twoEuroT = parseInt(this.currency.coins.twoEuro) * 2;

        this.totalCoins = dimeT + quarterT + halfEuroT + oneEuroT + twoEuroT;
        this.currency.total = this.totalCoins + this.totalDollars;

        this.onSayHello({
            $event: this.currency
        });
    }

    toAddNumberDollars() {
        let fiveT = parseInt(this.currency.dollars.five) * 5;
        let tenT = parseInt(this.currency.dollars.ten) * 10;
        let twentyT = parseInt(this.currency.dollars.twenty) * 20;
        let fiftyT = parseInt(this.currency.dollars.fifty) * 50;
        let hundredT = parseInt(this.currency.dollars.hundred) * 100;

        this.totalDollars = fiveT + tenT + twentyT + fiftyT + hundredT;
        this.currency.total = this.totalCoins + this.totalDollars;

        this.onSayHello({
            $event: this.currency
        });
    }

}

export default CartCoinsController
