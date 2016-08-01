/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const HeaderComponent = {
  template: `
    <nav class="mb-30">
      <div class="nav-wrapper pink accent-2">
          <div class="container">
            <a href="#!" class="brand-logo">Demo</a>

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
