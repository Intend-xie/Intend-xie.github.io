
//导航菜单
layui.use(['jquery', 'element', 'carousel'], function(){
    var $ = layui.jquery
    ,element = layui.element
    ,carousel = layui.carousel
  
    //滚动监听
    $(window).scroll(function() {
      var scr=$(document).scrollTop();
      scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
      scr > 0 ? $(".nav").css('display','block') : $(".nav").css('display','none');
    });

    //导航切换
    var btn = $('.nav').find('.nav-list').children('button')
    ,spa = btn.children('span')
    ,ul = $('.nav').find('.nav-list').children('.layui-nav');
    btn.on('click', function(){
      if(!$(spa[0]).hasClass('spa1')){
        spa[0].className = 'spa1';
        spa[1].style.display = 'none';
        spa[2].className = 'spa3';
        $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
      }else{
        spa[0].className = '';
        spa[1].style.display = 'block';
        spa[2].className = '';
        $('.nav')[0].style.height = 60 + 'px';
      }
    });
});

//夜晚模式
function switchDarkMode() {
	if ($('body').hasClass('dark')) {
		$("#dark").html("/img/rijianmoshi.svg");
		document.body.classList.remove('dark');
		localStorage.setItem('noDark', '1');
		localStorage.setItem('dark', '0');
	} else {
		$("#dark").html("/img/yejianmoshi.svg"); 
		document.body.classList.add('dark');
		localStorage.setItem('dark', '1');
		localStorage.setItem('noDark', '0');
	}
}


