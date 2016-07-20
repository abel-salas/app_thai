/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const HeaderComponent = {
  template: `

    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#/users">Usuarios</a></li>
      <li><a href="#/services">Servicios</a></li>
      <li><a href="#/products">Productos</a></li>
      <li class="divider"></li>
      <li><a href="#!">Opciones</a></li>
    </ul>

    <nav>
      <div class="nav-wrapper">
          <div class="container">
            <a href="#!" class="brand-logo">Centro Thai</a>

            <ul class="right hide-on-med-and-down">
              <li><a href="#/users">Usuarios</a></li>
              <li><a href="#/services">Servicios</a></li>
              <li><a href="#/products">Productos</a></li>
              <li>
                <a class="dropdown-button" href="#!" data-activates="dropdown1">
                  <i class="material-icons right">more_vert</i>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </nav>

  `
}
