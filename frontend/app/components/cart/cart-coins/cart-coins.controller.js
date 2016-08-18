
class CartCoinsController {
    constructor(CoinsService, $log, CartService) {
        this.$log = $log;
        this.CartService = CartService;
        this.totalCoins = 0;
        this.totalDollars = 0;
    }

    ifEmpty(value) {
        switch (value !== '' && value !== undefined) {
            case true:
                return 'active';
        }
    }

    outputCurrency(){
        if( this.totalCurrency >= 0 ) {
            this.onSayHello({
                $event: this.totalCurrency
            });
        }
    }

    toAddNumberCoins() {
        this.totalCoins = 0;
        let dimeT = parseInt(this.currency.coins.dime) * 0.10;
        let quarterT = parseInt(this.currency.coins.quarter) * 0.20;
        let halfEuroT = parseInt(this.currency.coins.halfEuro) * 0.50;
        let oneEuroT = parseInt(this.currency.coins.oneEuro);
        let twoEuroT = parseInt(this.currency.coins.twoEuro) * 2;

        let totalCoins = dimeT + quarterT + halfEuroT + oneEuroT + twoEuroT;
        if( totalCoins > 0) this.totalCoins = totalCoins;

        this.totalCurrency = totalCoins + this.totalDollars;

        this.outputCurrency();
    }

    toAddNumberDollars() {
        let fiveT = parseInt(this.currency.dollars.five) * 5;
        let tenT = parseInt(this.currency.dollars.ten) * 10;
        let twentyT = parseInt(this.currency.dollars.twenty) * 20;
        let fiftyT = parseInt(this.currency.dollars.fifty) * 50;
        let hundredT = parseInt(this.currency.dollars.hundred) * 100;

        let totalDollars = fiveT + tenT + twentyT + fiftyT + hundredT;
        if( totalDollars > 0) this.totalDollars = totalDollars;

        this.totalCurrency = this.totalCoins + totalDollars;

        this.outputCurrency();
    }

}

export default CartCoinsController
