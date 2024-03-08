console.log('Log kiểm tra: đã nhúng file pages/product/edit.js');

app.controller('editProductCtrl',function($scope,$http,$routeParams){
    console.log('Log kiểm tra: Khai báo editProductCtrl thành công');
    console.log(('Log để in thử giá trị params từ url', $routeParams));
})