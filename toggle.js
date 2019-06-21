$(document).ready(function () {
    $('.menu').click(function () {
        var $clicked = $(this)
        $('.menu').each(function(){
            var $menu = $(this);
            if (!$menu.is($clicked))
            {
                $($menu.attr('data-item')).hide();
                $menu.removeClass('selected');
            }
        });
        $($clicked.attr('data-item')).toggle();
        $clicked.addClass('selected');
    });
});

