console.log('Kiểm tra đã nhúng file pages/product/list.js')
app.controller('listProductCtrl',function($scope,$http){
    console.log('Log để khai báo listProductCtrl thành công');

    //1. Khai báo biến cần thiết
    $scope.listProduct = [];
    //2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/product',
        data: $scope.product
    }).then(function (response) {
        //Gán giá trị sau khi call api hoàn tất
        $scope.listProduct = response.data;
        console.log('Log thử kiểm tra $scope.listProduct',$scope.listProduct);
    })
    //3. 
    //4. Bắt sự kiện onClickDelete()
    $scope.onClickDelete = function(id){
        console.log('log thử id xóa: ',id);
        //Call api
        $http({
            method:'DELETE',
            url:'http://localhost:3000/product/' + id,
        }).then(function(response){
            alert("xóa thành công")
        })
    }
})