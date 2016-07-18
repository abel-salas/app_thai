/**
 * app.component.js
 *
 * Root component that defines the base element for the entire application
 */

export const AppComponent = {
  template: `
    <ac-header></ac-header>
    <div ui-view></div>
    <ac-footer></ac-footer>
    <ul id="dropdown2" class="dropdown-content">
   		<li><a href="#!">one<span class="badge">1</span></a></li>
    	<li><a href="#!">two<span class="new badge">1</span></a></li>
    	<li><a href="#!">three</a></li>
    </ul>
    <a class="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown<i class="mdi-navigation-arrow-drop-down right"></i></a>   
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate">
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
    </form>
  </div> 
  `
}
