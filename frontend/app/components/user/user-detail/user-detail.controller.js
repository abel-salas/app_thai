class UserDetailController {
    constructor(UserService, $scope, $state) {
        this.UserService = UserService
        this.$scope = $scope
        this.createUser = false
        this.$state = $state

        switch (this.user == undefined) {
            case true:
                this.createUser = true
        }
        
    }

    submitForm(user) {
        switch (this.createUser) {

            case true:
                this.UserService.createUser(user)
                    .then(response => {
                        Materialize.toast(user.name + ' ha sido Creado correctamente!', 3000)
                        this.$state.go('index.users')
                    })
                    .catch(error => Materialize.toast('Hemos tenido un error al Crear el usuario!', 3000))
                break;

            case false:
                this.UserService.editUser(user)
                    .then(response => {
                        Materialize.toast(user.name + ' ha sido Modificado correctamente!', 3000)
                        this.$state.go('index.users')
                    })
                    .catch(error => Materialize.toast('Hemos tenido un error al Modificar el usuario!', 3000))
                break;
        }
    }

    ifEmpty(value) {
        switch (value !== '' && value !== undefined) {
            case true:
                return 'active';
        }
    }

    deleteUser(user) {
        this.UserService.deleteUser(user)
            .then(response => {
                Materialize.toast(user.name + ' ha sido Eliminado correctamente!', 3000)
                this.$state.go('index.users')
            })
            .catch(error => Materialize.toast(user.name + 'Hemos tenido un error al Eliminar el usuario!', 3000))
    }

}

export default UserDetailController
