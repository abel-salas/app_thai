class ServiceItemController {
    constructor() {

        this.customStyle = {
            width: "100%",
            top: "0px"
        }

    }

    onClick(value) {
        this.onSayHello({
            $event: value
        });
    }

}
export default ServiceItemController
