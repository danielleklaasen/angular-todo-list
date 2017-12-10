var fnOpenNewItemWdw = function(){
  document.getElementById('add-item-modal').style.display = 'block';
  document.getElementById('content-overlay').style.display = 'block';
};

var fnCloseNewItemWdw = function(){
  document.getElementById('add-item-modal').style.display = 'none';
  document.getElementById('content-overlay').style.display = 'none';
};

document.getElementById('action-btn').addEventListener("click", fnOpenNewItemWdw);
document.getElementById('add-item').addEventListener("click", fnCloseNewItemWdw);
document.getElementById('content-overlay').addEventListener("click", fnCloseNewItemWdw);

angular.module("app", [])

  .controller("ToDoController", function($scope) {
    $scope.todos = [
      {text:'Example Task', responsible: 'Danielle', done:false}
    ];

    $scope.addTodo = function () {
      if(!$scope.addTodoResponsible){
        $scope.addTodoResponsible = 'Danielle';
      }
      $scope.todos.push({text:$scope.addTodoText, responsible: $scope.addTodoResponsible, done:false});
      $scope.addTodoText = '';
      $scope.addTodoResponsible = '';
    };

    $scope.itemDone = function (item) {
      item.done = true;
    };

    $scope.itemDelete = function (item) {
      $scope.todos.splice( $scope.todos.indexOf(item), 1 );
    };

    $scope.orderByMe = function (x) {
      $scope.myOrderBy = x;
    }

  });


