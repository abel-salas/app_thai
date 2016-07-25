/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */

class UserListController {
    constructor() {
        this.message = 'Hi ngErs!'
    }

    sayHello({ userName }) {
        window.alert(`Hello ${userName}!`)
    }


}

export default UserListController
