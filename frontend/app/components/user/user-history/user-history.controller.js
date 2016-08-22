class UserHistoryController {
    constructor(OrderService) {
        this.OrderService = OrderService;
        this.getOrders();
    }

    getOrders() {
        console.log('hello => userID => ', this.user._id)
        this.OrderService.getOrderByUser(this.user._id)
            .then(res => {
                console.log('la respuesta ', res)
                this.ordersUser = res.reverse();
            })
            .catch(error => Materialize.toast('Error al buscar recibos para este cliente!', 3000));
    }

}

export default UserHistoryController
