class ProductDetailController {
    constructor(ProductService, $scope, $state) {
        this.ProductService = ProductService
        this.$scope = $scope
        this.createProduct = false
        this.$state = $state

        switch (this.product == undefined) {
            case true:
                this.createProduct = true
        }


        if (this.createProduct) {

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

            this.styleInline = this.product.img.style;

            // TODO when all products old is modified

            if (typeof(this.product.img) === "string") {
                let name = this.product.img;
                this.product.img = {
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

        switch (value){
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

    submitForm(product) {

        product.img.style = this.styleInline;

        switch (this.createProduct) {
            case true:
                this.ProductService.createProduct(product)
                    .then(response => {
                        Materialize.toast(product.name + ' ha sido Creado correctamente!', 3000)
                        this.$state.go('index.products')
                    })
                    .catch(error => Materialize.toast('Hemos tenido un error al Crear el Producto!', 3000))
                break;
            case false:
                this.ProductService.editProduct(product)
                    .then(response => {
                        Materialize.toast(product.name + ' ha sido Modificado correctamente!', 3000)
                        this.$state.go('index.products')
                    })
                    .catch(error => Materialize.toast('Hemos tenido un error al Modificar el Producto!', 3000))
                break;
        }
    }

    ifEmpty(value) {
        switch (value !== '' && value !== undefined) {
            case true:
                return 'active';
        }
    }

    deleteProduct(product) {
        this.ProductService.deleteProduct(product)
            .then(response => {
                Materialize.toast(product.name + ' ha sido Eliminado correctamente!', 3000)
                this.$state.go('index.products')
            })
            .catch(error => Materialize.toast(product.name + 'Hemos tenido un error al Eliminar el usuario!', 3000))
    }


}

export default ProductDetailController
