export const HeaderComponent = {
    template: `
        <nav class="header-nav-fixed">
          <div class="nav-wrapper pink accent-2">
              <div class="container">
                <a href="" class="brand-logo">THAI</a>

                <ul class="right hide-on-med-and-down">
                  <li>
                    <a ui-sref="index.users" ui-sref-active="nav-active">
                        <img src="img/icon/people.svg">
                    </a>
                  </li>
                  <li>
                    <a ui-sref="index.servicesWoman" ui-sref-active="nav-active">
                      <img src="img/icon/woman.svg">
                    </a>
                  </li>
                  <li>
                    <a ui-sref="index.servicesMen" ui-sref-active="nav-active">
                        <img src="img/icon/men.svg">
                    </a>
                  </li>
                  <li>
                    <a ui-sref="index.servicesLaser" ui-sref-active="nav-active">
                        <img src="img/icon/laser.svg">
                    </a>
                  </li>
                  <li>
                    <a ui-sref="index.products" ui-sref-active="nav-active">
                        <img src="img/icon/barcode-product.svg">
                    </a>
                  </li>
                  <li>
                    <a ui-sref="admin" ui-sref-active="nav-active">
                        <img src="img/icon/three.svg">
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
        <nav></nav>
    `
}
