

export default class CoinsService {
    constructor($log) {
        this.$log = $log
    }

    addCoinsTotal(coins) {
        this.$log.log('addCoinsTotal');
    }

    addDollarsTotal(dollars) {
        this.$log.log('addDollarsTotal');
    }

}
