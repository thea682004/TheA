console.log('Kiểm tra đã nhúng file pages/product/create.js');
app.controller('createProductCtrl', function ($scope, $http) {
    console.log('Log để khai báo createProductCtrl thành công');

    //1. Khai báo các biến chính cần thiết
    // Biến lưu dữ liệu sản phẩm tạo mới
    $scope.product = {
        id: '',
        name: '',
        price: '',
        category: ''
    }
    $scope.formHopLe = true;
    $scope.formThongBao = '';
    // 2.Liên kết biến vào input, select bằng ng-model
    // Mở file html lên vào code

    // 3. Bắt sự kiện click button Tạo mới và xử lý logic
    // Khai báo function
    // Liên kết function với button bằng ng-click
    $scope.onClickCreate = function () {
        console.log('Log để kiểm tra giá trị biến $scope.product', $scope.product);
        // Validate dữ liệu đầu vào
        // Khai báo biến hỗ trợ validate
        // Khai báo html để hiển thị lỗi validate

        // Reset biến validate (để tắt alert thông báo)
        $scope.formHopLe = true;
        $scope.formThongBao = '';
        // Validate id: Bắt buộc
        if ($scope.product.id === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = 'Mời bạn nhập ID'

            return; //Dừng function lại và chạy xuống dưới
        }
        // Validate name: Bắt buộc
        if ($scope.product.name === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = 'Mời bạn nhập tên'

            return; //Dừng function lại và chạy xuống dưới
        }
        //Validate price: bắt buộc, phải là số, lớn hơn 1,000,000vnđ
        if ($scope.product.price === ''
            || isNaN($scope.product.price)
            || Number($scope.product.price) < 1000000) {

            $scope.formHopLe = false;
            $scope.formThongBao = 'Mời bạn nhập lại giá (phải lớn hơn 1.000.000VNĐ)';
            return; //Dừng function lại và chạy xuống dưới
        }
        // Validate danhmuc: Bắt buộc
        if ($scope.product.category === '') {
            $scope.formHopLe = false;
            $scope.formThongBao = 'Mời bạn chọn danh mục'
        }

        //Nếu code chay đến đây là form hợp lệ
        console.log('Form hợp lệ');


        // Call api để lưu dữ liệu vào db
        $http({
            method: 'POST',
            url: 'http://localhost:3000/product',
            data: $scope.product
        }).then(function (response) {
            //Sau khi call api thành công
            //Lưu ý: Lỗi của LiveServer: khi sử dụng Post, put, patch thì sau khi thành công trình duyệt sẽ tự reload
            //==> Không báo thành công bằng html được mà phải dùng alert của js
            alert('Chúc mừng bạn đã tạo mới thành công');
        })
    }



})