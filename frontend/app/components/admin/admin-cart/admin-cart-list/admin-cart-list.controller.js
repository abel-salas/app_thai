
class AdminCartListController {
    constructor(CartService, $log) {
        this.CartService = CartService;
        this.$log = $log;

        this.labels = ["Total Efectivo", "Total Mixto", "Total Tarjeta"];

        this.carts.forEach(cart => {
            var addCartContent = cart.openCurrency + cart.totalPayments.totalEfectivo + cart.totalPayments.totalMixto;
            cart.diferenceCart = addCartContent - cart.closeCurrency;
        });
    }

    viewCart(cart){
        this.selectedCart = cart;
    }

}

export default AdminCartListController
