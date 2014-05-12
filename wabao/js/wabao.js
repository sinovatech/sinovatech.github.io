// 全局变量
var luckList = [];

// 设置中奖名单高度
var tabHeight = $('.j-tabcontent1').height();
$('.j-tabcontent2').height(tabHeight);

// 创建tab切换函数
function tabFn(index){
  if (index == 1) {
    $('.j-tabbtn1').addClass('current');
    $('.j-tabcontent1').removeClass('fn-hide');
    $('.j-firstbar').addClass('fn-hide');
  } else {
    $('.j-tabbtn1').removeClass('current');
    $('.j-tabcontent1').addClass('fn-hide');
  }
  if (index == 2) {
    $('.j-tabbtn2').addClass('current');
    $('.j-tabcontent2').removeClass('fn-hide');
    $('.j-firstbar').removeClass('fn-hide');
  } else {
    $('.j-tabbtn2').removeClass('current');
    $('.j-tabcontent2').addClass('fn-hide');
  }
}

// 中奖名单列表滚动
function scrollList(){
  if ($('.j-tabbtn2').hasClass('current')) {
    var ulHeight = $('.j-tabcontent2 ul').height();
    var scrollObj = $('.j-tabcontent2')[0];
    var sTop = scrollObj.scrollTop;
    sTop += 2;
    if (sTop >= ulHeight) {
      sTop = 0;
    }
    scrollObj.scrollTop = sTop;
    setTimeout(scrollList, 30);
  }
}

// 中奖名单列表展示
function showList(){
  tabFn(2);
  var ulHeight = $('.j-tabcontent2 ul').height();
  if (ulHeight > $('.j-tabcontent2').height()) {
    // 克隆，无缝循环
    var newUl = $('.j-tabcontent2 ul').clone();
    $('.j-tabcontent2').append(newUl);
    // 滚动
    scrollList();
  }
}

// 绑定切换
$('.j-tabbtn1').tap(function(){
  if (!$(this).hasClass('current')) {
    tabFn(1);
  }
  return false;
});
$('.j-tabbtn2').tap(function(){
  if (!$(this).hasClass('current')) {
    // 获取中奖名单
    if (luckList.length == 0 ) {
      // 异步请求
      luckList.push({'num':'130','msg':'信息'});

      showList();
    } else {
      // 展示中奖名单
      showList();
    }
  }
  return false;
});




