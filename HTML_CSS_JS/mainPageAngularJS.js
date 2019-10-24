let app = angular.module('mainPage',[]);

app.controller('MainpageController',['$scope','$http',($scope,$http)=> {
  $scope.trainTable = [[{state:'열차 정보 가져오는 중',offset:'-'},{state:'열차 정보 가져오는 중',offset:'-'}],
                       [{state:'열차 정보 가져오는 중',offset:'-'},{state:'열차 정보 가져오는 중',offset:'-'}]]

  let queryTrainInfo = (callback) => {
    $http.get('/getTrainInfo').success((output) => {
      callback(output)
    });
  }

  $scope.updateTrainTable = () => {
    queryTrainInfo((data) => {
      let toPajuArr = data[0]
      let toSeoulArr = data[1]

      if (toPajuArr.length >= 1){
        $scope.trainTable[0][0].state = toPajuArr[0].state
        $scope.trainTable[0][0].offset = toPajuArr[0].offset
      } else {
        $scope.trainTable[0][0].state = '열차 정보 없음'
      }

      if (toPajuArr.length >= 2){
        $scope.trainTable[0][1].state = toPajuArr[1].state
        $scope.trainTable[0][1].offset = toPajuArr[1].offset
      } else {
        $scope.trainTable[0][1].state = '열차 정보 없음'
      }


      if (toSeoulArr.length >= 1){
        $scope.trainTable[1][0].state = toSeoulArr[0].state
        $scope.trainTable[1][0].offset = toSeoulArr[0].offset
      } else {
        $scope.trainTable[1][0].state = '열차 정보 없음'
      }

      if (toSeoulArr.length >= 2){
        $scope.trainTable[1][1].state = toSeoulArr[1].state
        $scope.trainTable[1][1].offset = toSeoulArr[1].offset
      } else {
        $scope.trainTable[1][1].state = '열차 정보 없음'
      }
    })
  }
}])
