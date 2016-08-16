class ServiceItemController {
    constructor() {
    }

    onClick(value) {
        this.onSayHello({
            $event: value
        });
    }

}

export default ServiceItemController
