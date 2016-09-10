class ServiceLaserController {

    constructor($state, OrderService) {
        this.$state = $state;
        this.OrderService = OrderService;
    }

    sayHello(value) {
        this.OrderService.sendServiceOrderline(value);
    }

    createService() {
        this.$state.go('index.createService')
    }

}
export default ServiceLaserController
