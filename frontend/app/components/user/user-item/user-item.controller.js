/**
 * components/speaker/speaker-item/speaker-item.controller.js
 *
 * Controller for <user-item> component
 */

class UserItemController {
    constructor($log) {
        this.$log = $log;
    }

    onClick(value) {
        this.$log.log('aqui saludamos', value);
        this.onSayHello(value)
    }

    goToDetailService() {
    }
}

export default UserItemController
