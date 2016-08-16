class ProductListController {
    constructor($state, OrderService) {
        this.OrderService = OrderService;
        this.$state = $state;
    }

    sayHello(value) {
        this.OrderService.sendProductOrderline(value);
    }

    createProduct() {
        this.$state.go('index.createProduct')
    }

}

export default ProductListController
