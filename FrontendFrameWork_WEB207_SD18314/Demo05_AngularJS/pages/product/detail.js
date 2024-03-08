console.log('Kiểm tra đã nhúng file pages/product/detail.js');
app.controller('detailProductCtrl',function($scope,$http,$routeParams){
    console.log('Log để khai báo detailProductCtrl thành công');
    console.log('');
//1. khai báo biến cần thiết
//Mở file create.js lên cop biến $scope.product về
$scope.product = {
    id: '',
    name: '',
    price: '',
    category: ''
}
//2. Call api lấy thông tin chi tiết sản phẩm
$http({
    method: 'GET',
    url: 'http://localhost:3000/product/'+$routeParams.id,
}).then(function (response) {
    $scope.product = response.data;
})
})