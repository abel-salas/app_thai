
class AdminCartListController {
    constructor(CartService, $log) {
        this.CartService = CartService;
        this.$log = $log;

        this.labels = ["Total Efectivo", "Total Mixto", "Total Tarjeta"];
    }

    viewCart(cart){
        this.selectedCart = cart;
    }

}

export default AdminCartListController
