/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */


class ServiceDetailController {
  constructor (ServiceService, $scope, $state) {
    this.ServiceService = ServiceService
    this.$scope = $scope
    this.createService = false
    this.$state = $state

    switch (this.service == undefined){
      case true:
        this.createService = true
        console.log(this.service)
    }

  }

  submitForm(user){
    switch (this.createService){
      case true:
        this.ServiceService.createService(user)
            .then(response => {
              Materialize.toast( user.name + ' ha sido Creado correctamente!', 3000)
              this.$state.go('index.users')
            })
            .catch(error => Materialize.toast( 'Hemos tenido un error al Crear el usuario!', 3000) )
        break;
      case false:
        this.ServiceService.editService(user)
            .then(response => {
              Materialize.toast( user.name + ' ha sido Modificado correctamente!', 3000) 
              this.$state.go('index.users')
            })
            .catch(error => Materialize.toast('Hemos tenido un error al Modificar el usuario!', 3000) )
        break;
    }
  }

  ifEmpty(value) {
      switch (value !== '' && value !== undefined){
          case true: return 'active';
      }
  }

  deleteService(user) {
    this.ServiceService.deleteService(user)
        .then(response => {
          Materialize.toast( user.name + ' ha sido Eliminado correctamente!', 3000)
          this.$state.go('index.users')
        })
        .catch(error => Materialize.toast( user.name + 'Hemos tenido un error al Eliminar el usuario!', 3000) )
  }


}

export default ServiceDetailController
