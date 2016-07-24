/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const HeaderComponent = {
  template: `
    <nav>
      <div class="nav-wrapper">
          <div class="container">
            <a href="#!" class="brand-logo">Centro Thai</a>

            <ul class="right hide-on-med-and-down">
              <li><a href="#/index/users">Usuarios</a></li>
              <li><a href="#/index/services">Servicios</a></li>
              <li><a href="#/index/products">Productos</a></li>
            </ul>
        </div>
      </div>
    </nav>

  `
}
