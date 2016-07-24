/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */


class UserDetailController {
  constructor (UserService, $scope) {
    this.UserService = UserService
    this.$scope = $scope
    this.createUser = false;

    switch (this.user == undefined){
      case true:
        this.createUser = true
        console.log(this.user)
    }

  }

  submitForm(user){
    switch (this.createUser){
      case true:
        this.UserService.createUser(user)
            .then(response => console.log('usuario creado ',response) )
            .catch(error => console.log('error ',error) )
        break;
      case false:
        this.UserService.editUser(user)
            .then(response => console.log('usuario creado ',response) )
            .catch(error => console.log('error ',error) )
        break;
    }


  }

  ifEmpty(value) {
      switch (value !== '' && value !== undefined){
          case true: return 'active';
      }
  }

  deleteUser(user) {
    this.UserService.deleteUser(user)
        .then(response => console.log('usuario eliminado',response) )
        .catch(error => console.log('error eliminar',error) )
  }


}

export default UserDetailController
