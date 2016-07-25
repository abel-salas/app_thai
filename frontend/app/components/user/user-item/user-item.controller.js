/**
 * components/speaker/speaker-item/speaker-item.controller.js
 *
 * Controller for <user-item> component
 */

class UserItemController {
    constructor() {
    }

    onClick() {
        this.onSayHello({
            $event: {
                userName: this.data.name
            }
        })
    }
}

export default UserItemController
