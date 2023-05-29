$(document).ready(function() {
    const tabsTitle = $('.tabs-title');
    const tabsContent = $('.tabs-content li');

    tabsTitle.click(function() {
        const index = $(this).index();

        tabsContent.removeClass('active');
        tabsContent.eq(index).addClass('active');

        tabsTitle.removeClass('active');
        $(this).addClass('active');
    });
});