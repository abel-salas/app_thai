class DashboardCardController {
    constructor($filter) {
      this.$filter = $filter;
      this.ngOnInit();
    }

    ngOnInit(){
      this.dataFiltered = this.$filter('orderBy')(this.data, this.config.quantity);
      console.log(this.dataFiltered.reverse());

    }

    viewCart(cart) {
        this.selectedCart = cart;
    }

}

export default DashboardCardController
