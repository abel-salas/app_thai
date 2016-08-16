
class UserListController {
    constructor(OrderService) {
        this.OrderService = OrderService;
    }

    sayHello(user) {
        this.OrderService.sendUser(user);
    }

}

export default UserListController
