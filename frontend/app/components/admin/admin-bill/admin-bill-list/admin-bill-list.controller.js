class AdminBillListController {
    constructor(BillService, $log) {
        this.BillService = BillService;
        this.$log = $log;

        this.methods = ["Domiciliado", "Efectivo"];
    }

    viewCart(cart){
        this.selectedCart = cart;
    }

}

export default AdminBillListController
