class ServiceDetailController {
    constructor(ServiceService, $scope, $state) {
        this.ServiceService = ServiceService
        this.$scope = $scope
        this.createService = false
        this.$state = $state

        switch (this.service == undefined) {
            case true:
                this.createService = true
                console.log(this.service)
        }

        if (this.createService) {

            this.styleInline = {
                "top": "0px",
                "width": "100%",
                "left": "0px"
            };

            this.input = {
                "top": 0,
                "width": 100,
                "left": "0"
            };

        } else {

            this.styleInline = this.service.img.style;

            // TODO when all services old is modified
            if (typeof(this.service.img) === "string") {
                let name = this.service.img;
                this.service.img = {
                    "name": name,
                    "style": {}
                }
            }

            if (angular.isUndefined(this.styleInline)) {
                this.styleInline = {
                    "top": "0px",
                    "width": "100%",
                    "left": "0px"
                };
            }

            if (angular.isUndefined(this.styleInline.left)) {
                this.styleInline.left = "0px";
            }
            //

            let top = this.styleInline.top.split("px");
            let width = this.styleInline.width.split("%");
            let left = this.styleInline.left.split("px");

            this.input = {
                "top": top[0],
                "width": width[0],
                "left": left[0]
            };
        }
    }

    insertPx(value) {

        switch (value) {
            case "top":
                this.styleInline[value] = this.input[value] + "px";
                break;
            case "left":
                this.styleInline[value] = this.input[value] + "px";
                break;
            case "width":
                this.styleInline[value] = this.input[value] + "%";
                break;
        }

    }

    submitForm(service) {

        service.img.style = this.styleInline;
        console.log(service.gender)

        switch (this.createService) {
            case true:
                this.ServiceService.createService(service)
                    .then(response => {
                        Materialize.toast(service.name + ' ha sido Creado correctamente!', 3000)
                        this.goToService(service.gender);
                    })
                    .catch(error => Materialize.toast('Hemos tenido un error al Crear el usuario!', 3000))
                break;
            case false:
                this.ServiceService.editService(service)
                    .then(response => {
                        Materialize.toast(service.name + ' ha sido Modificado correctamente!', 3000)
                        this.goToService(service.gender);
                    })
                    .catch(error => Materialize.toast('Hemos tenido un error al Modificar el usuario!', 3000))
                break;
        }
    }

    goToService(category){
        switch (category) {
            case 'woman':
                this.$state.go('index.servicesWoman');
                break;
            case 'men':
                this.$state.go('index.servicesMen');
                break;
            case 'laser':
                this.$state.go('index.servicesLaser');
                break;
        }
    }

    ifEmpty(value) {
        switch (value !== '' && value !== undefined) {
            case true:
                return 'active';
        }
    }

    deleteService(service) {
        this.ServiceService.deleteService(service)
            .then(response => {
                Materialize.toast(service.name + ' ha sido Eliminado correctamente!', 3000)
                this.$state.go('goToRoute')
            })
            .catch(error => Materialize.toast(service.name + 'Hemos tenido un error al Eliminar el usuario!', 3000))
    }


}

export default ServiceDetailController
