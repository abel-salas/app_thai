import controller from './cart-coins.controller.js'

export const CartCoinsComponent = {
    bindings: {
        onSayHello: '&'
    },
    controller,
    template: `
      <div class="card-content">
              <ul class="collection no-border">
                <li class="collection-item">
                    <i class="material-icons">label_outline</i>
                    <span class="card-title">Monedas</span>
                    <div class="row">

                      <div class="input-field col s2">
                        <input id="text" type="text" ng-model="$ctrl.currency.coins.dime" ng-blur="$ctrl.toAddNumberCoins()">
                        <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.coins.dime)">0.10€</label>
                      </div>

                      <div class="input-field col s2">
                        <input id="text" type="text" ng-model="$ctrl.currency.coins.quarter" ng-blur="$ctrl.toAddNumberCoins()">
                        <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.coins.quarter)">0.20€</label>
                      </div>

                      <div class="input-field col s2">
                        <input id="text" type="text" ng-model="$ctrl.currency.coins.halfEuro" ng-blur="$ctrl.toAddNumberCoins()">
                        <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.coins.halfEuro)">0.50€</label>
                      </div>

                      <div class="input-field col s2">
                        <input id="text" type="text" ng-model="$ctrl.currency.coins.oneEuro" ng-blur="$ctrl.toAddNumberCoins()">
                        <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.coins.oneEuro)">1€</label>
                      </div>

                      <div class="input-field col s2">
                        <input id="text" type="text" ng-model="$ctrl.currency.coins.twoEuro" ng-blur="$ctrl.toAddNumberCoins()">
                        <label for="email" ng-class="$ctrl.ifEmpty($ctrl.currency.coins.twoEuro)">2€</label>
                      </div>
                      <div class="input-field col s2"><span class="secondary-content"> = {{$ctrl.totalCoins}}€</span></div>
                  </div>
                </li>
                <li class="collection-item" style="margin-top:20px;">
                    <i class="material-icons">label_outline</i>
                    <span class="card-title">Billetes</span>
                    <div class="row">
                        <div class="input-field col s2">
                            <input id="text" type="text" ng-model="$ctrl.currency.dollars.five" ng-blur="$ctrl.toAddNumberDollars()">
                            <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.dollars.five)">5€</label>
                        </div>

                        <div class="input-field col s2">
                            <input id="text" type="text" ng-model="$ctrl.currency.dollars.ten" ng-blur="$ctrl.toAddNumberDollars()">
                            <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.dollars.ten)">10€</label>
                        </div>

                        <div class="input-field col s2">
                            <input id="text" type="text" ng-model="$ctrl.currency.dollars.twenty" ng-blur="$ctrl.toAddNumberDollars()">
                            <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.dollars.twenty)">20€</label>
                        </div>

                        <div class="input-field col s2">
                            <input id="text" type="text" ng-model="$ctrl.currency.dollars.fifty" ng-blur="$ctrl.toAddNumberDollars()">
                            <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.dollars.fifty)">50€</label>
                        </div>

                        <div class="input-field col s2">
                            <input id="text" type="text" ng-model="$ctrl.currency.dollars.hundred" ng-blur="$ctrl.toAddNumberDollars()">
                            <label for="coin" ng-class="$ctrl.ifEmpty($ctrl.currency.dollars.hundred)">100€</label>
                        </div>
                        <div class="input-field col s2"><span class="secondary-content"> = {{$ctrl.totalDollars}}€</span></div>
                    </div>
                </li>
              </ul>
      </div>
      `
}