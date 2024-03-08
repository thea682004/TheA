console.log('Kiểm tra đã nhúng file pages/product/list.js')
app.controller('listProductCtrl',function($scope,$http){
    console.log('Log để khai báo listProductCtrl thành công');
    $scope.listProduct = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/product',
        data: $scope.product
    }).then(function (response) {
        $scope.listProduct = response.data;
    })
})