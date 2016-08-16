class UserItemController {
    constructor() {
    }

    onClick(value) {
        this.onSayHello({
            $event: value
        });
    }

}

export default UserItemController
