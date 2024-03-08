// Khai báo controller editProductCtrl
app.controller('editProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);
    // 1.khai báo các biến cần thiết 
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

    $scope.formHopLe = true;
    $scope.formThongBao = '';
    // 3.call api lấy chi tiết sản phẩm theo url nhận được từ url
    $http({
        method: 'GET',
        url: 'http://localhost:3000/product/' + $routeParams.id
    }).then(function (response) {
        $scope.product = response.data;
    })
    $scope.onClickEdit = function () {
        console.log('Log kiểm tra giá trị biến $scope.product', $scope.product);

        $scope.formHopLe = true;
        $scope.formThongBao = '';


        //Validate id: Bắt Buộc
        if ($scope.product.id === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = "Mời Bạn Nhập ID";
            return; //Dừng function này lại và chạy xuống dưới nữa

        }
        //Validate tên: Bắt Buộc
        if ($scope.product.name_product === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = "Mời Bạn Nhập Tên"
            return;
        }
        //Validate giá: Bắt Buộc
        if ($scope.product.product_price === '' || isNaN($scope.product.product_price) || Number($scope.product.product_price) < 100000) {
            $scope.formHopLe = false;
            $scope.formThongBao = "Giá sản phẩm phải lớn hơn 100.000"
            return;
        }
        //Validate giá niêm yết: Bắt Buộc
        if ($scope.product.original_price === '' || isNaN($scope.product.original_price) || Number($scope.product.original_price) < 100000) {
            $scope.formHopLe = false;
            $scope.formThongBao = "Giá niêm yết phải lớn hơn 100.000"
            return;
        }
        //Validate % giảm giá: Bắt Buộc
        if ($scope.product.discount === '' || isNaN($scope.product.discount) || Number($scope.product.discount) > 100) {
            $scope.formHopLe = false;
            $scope.formThongBao = "% giảm giá phải nhỏ hơn 100%"
            return;
        }
        //Validate loại sản phẩm
        if ($scope.product.name_category === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = 'Chọn Loại Sản Phẩm'
        }
        // Call api để lưu dữ liệu vào db 
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/product/' + $routeParams.id,
            data: $scope.product
        }).then(function (response) {

            alert('Chỉnh sửa thành công')
        })
    }
})
