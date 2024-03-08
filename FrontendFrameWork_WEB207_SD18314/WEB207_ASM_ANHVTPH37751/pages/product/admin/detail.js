app.controller('detailProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo detailProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);
    // 1.Khai báo biến cần thiết 
    // Mở create.js lên và copy biến $scope.product về 
    $scope.product = {
        id: "",
        name_product: "",
        img: "",
        product_price: "",
        original_price: "",
        product_price: "",
        name_category: "",
        discount: "",
    }
    //2. Call API lấy thông tin chi tiết sản phẩm
    $http({
        method :'GET',
        url:'http://localhost:3000/product/' + $routeParams.id
    }).then(function(response){
        // Gán giá trị sau khi call api thành công 
        $scope.product = response.data;
    })
})
