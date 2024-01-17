# AngularJS

- ng-app
- ng-init - declare a var
- ng-model - call var
- ng-bind | {{var}} - show info
- ng-controller
- ng-show
- ng-hide
- ng-if
- ng-click
- parent
- ng-include
- $scope
- $parent

CDN:

```js
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
```

- Expression: `{{var}}`
- Bind: `<p bind="var"> </p>`
- ng-model sum:
  -```html
  <input type="number" ng-model="x" />
  <input type="number" ng-model="y" />
    <p>{{x + y}}</p>
  ```
- ng-show

  - ```html
    <div ng-app>
      <input type="text" ng-model="psw" />
      <p ng-show="psw === 'bb'">2395</p>
      <p ng-show="psw === '@'">@hotmail.com</p>
    </div>
    ```

- controller

  - ```html
    <div ng-app="myApp2" ng-controller="myCtrl">
      {{ firstName + " " + lastName }}
    </div>

    <script>
      var app = angular.module('myApp2', [])
      app.controller('myCtrl', function ($scope) {
        $scope.firstName = 'John'
        $scope.lastName = 'Doe'
      })
    </script>
    ```

- controller 2

  - ```html
    <div ng-app="myApp" w3-test-directive></div>

    <script>
      var app = angular.module('myApp', [])
      app.directive('w3TestDirective', function () {
        return {
          template:
            "<p style='color:red'>GERALDO</p>I was made in a directive constructor!",
        }
      })
    </script>
    ```

- form uses $parent, controller, ng-if and if $scope

```js
<div ng-app="myAPP" ng-controller="MyCT">

    <form ng-if="logar">
      <div class="input-field">
      <label for="matricula">Matricula:</label>
    <input id="matricula" type="text" ng-model="$parent.matri">
  </div>

    <div class="input-field">
      <label for="pass">Senha:</label>
    <input id="pass" type="password" ng-model="$parent.getsenha">
  </div>
   <!--  <button ng-click="logado()">Login</button>  -->
   <div class="input-field">
    <input type="submit" ng-click="logado()">
  </div>
</form>
<div style="margin-top:5px">
<p ng-show="sucesso" style="background: green;display: inline;">Logado com sucesso!</p>
<p ng-show="errado" style="background: rgb(255, 10, 10);display: inline;">Verifique os dados!</p>
</div>
</div><!--container-->

//script

<script>
  var app = angular.module('myAPP', []);
  app.controller('MyCT', function ($scope) {
   $scope.logar = true;

  $scope.logado = function (){
    if($scope.matri === '202108736074' && $scope.getsenha === '5791hA'){
       // alert('welcome');
        $scope.sucesso = true;
        $scope.errado = false;
    } else {
    $scope.errado = true;
    $scope.sucesso = false;
}
}//function

  });

</script>
```
