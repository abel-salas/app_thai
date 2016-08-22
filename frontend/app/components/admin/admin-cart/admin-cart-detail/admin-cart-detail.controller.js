class AdminCartDetailController {
    constructor($state, $log) {
        this.$state = $state;
        this.$log = $log;

        this.$log.log('este es el controllador de cart detail admin')
        /*
        this.labels = ["Total Efectivo", "Total Mixto", "Total Tarjeta"];
        this.data = [
            this.cart.totalPayments.totalEfectivo,
            this.cart.totalPayments.totalMixto,
            this.cart.totalPayments.totalTarjeta
        ];*/
    }

}

export default AdminCartDetailController
