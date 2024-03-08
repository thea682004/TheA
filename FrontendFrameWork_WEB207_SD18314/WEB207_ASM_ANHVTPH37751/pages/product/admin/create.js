app.controller("createProductCtrl", function ($scope, $http) {
    $scope.product = {
        id: "",
        name_product: "",
        img: "",
        product_price: "",
        original_price: "",
        product_price: "",
        name_category: "",
        discount: "",
    };
    $scope.formValidateMessage = '',
        $scope.formInvalid = false,
        $scope.onClickCreate = function () {
            $scope.formValidateMessage = '';
            $scope.formInvalid = false

            //Validate ID: bắt buộc
            if ($scope.product.id === '') {
                $scope.formInvalid = true;
                $scope.formValidateMessage = "Nhập ID"
                return;
            }
            //Validate tên
            if ($scope.product.name_product === '') {
                $scope.formInvalid = true;
                $scope.formValidateMessage = "Nhập Tên Sản Phẩm"
                return;
            }
            //Validate loại sản phẩm
            if ($scope.product.name_category === '') {
                $scope.formHopLe = false;
                $scope.formThongBao = 'Chọn Loại Sản Phẩm'
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
            // Call API
            $http({
                method: 'POST',
                url: 'http://localhost:3000/product',
                data: $scope.product
            }).then(function (response) {
                alert('Chúc mừng bạn tạo mới sản phẩm thành công')
            })
        }
});
