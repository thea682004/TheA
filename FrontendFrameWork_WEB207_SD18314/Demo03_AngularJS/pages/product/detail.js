console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// Khai báo controller detaiProductCtrl
// Khai báo "$routeParams để lấy giá trị truyền vào url"
app.controller('detailProductCtrl',function($scope,$http,$routeParams){
    console.log('Log để kiểm tra: khai báo detailProductCtrl thành công')
    console.log('Log để in thử giá trị params từ url' ,$routeParams);
})