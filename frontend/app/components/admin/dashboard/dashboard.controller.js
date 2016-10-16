class DashboardController {
    constructor(DashboardService, $log) {
        this.dashboardService = DashboardService;
        this.ngOnInit();
    }

    ngOnInit() {
        this.configServices = {
          'quantity': 'quantity',
          'name': 'name',
          'type': 'type'
        }

    }

    viewCart(cart){
        this.selectedCart = cart;
    }

}

export default DashboardController
