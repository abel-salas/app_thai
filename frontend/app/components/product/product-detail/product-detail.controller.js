/**
 * components/speaker/spekaer-list/speaker-list.controller.js
 *
 * Controller for <user-list> component
 */


class ProductDetailController {
  constructor (ProductService, $scope, $state) {
    this.ProductService = ProductService
    this.$scope = $scope
    this.createProduct = false
    this.$state = $state

    switch (this.product == undefined){
      case true:
        this.createProduct = true
        console.log(this.product)
    }

  }

  submitForm(product){
    switch (this.createProduct){
      case true:
        this.ProductService.createProduct(product)
            .then(response => {
              Materialize.toast( product.name + ' ha sido Creado correctamente!', 3000)
              this.$state.go('index.products')
            })
            .catch(error => Materialize.toast( 'Hemos tenido un error al Crear el Producto!', 3000) )
        break;
      case false:
        this.ProductService.editProduct(product)
            .then(response => {
              Materialize.toast( product.name + ' ha sido Modificado correctamente!', 3000)
              this.$state.go('index.products')
            })
            .catch(error => Materialize.toast('Hemos tenido un error al Modificar el Producto!', 3000) )
        break;
    }
  }

  ifEmpty(value) {
      switch (value !== '' && value !== undefined){
          case true: return 'active';
      }
  }

  deleteProduct(product) {
    this.ProductService.deleteProduct(product)
        .then(response => {
          Materialize.toast( product.name + ' ha sido Eliminado correctamente!', 3000)
          this.$state.go('index.products')
        })
        .catch(error => Materialize.toast( product.name + 'Hemos tenido un error al Eliminar el usuario!', 3000) )
  }


}

export default ProductDetailController
