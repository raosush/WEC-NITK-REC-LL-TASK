$(document).ready(function () {
    if ($('#paginate-infinite-scrolling').size() > 0) {
        $(window).on('scroll', _.throttle(lazyLoad, 50));
    }

    if ($('#paginate-load-more').size() > 0) {
        $('#load-more-button').show().click(function() {
            let more_posts_url = $('#paginate-load-more .pagination .next_page a').attr('href');
            $this = $(this);
            $this.html('<img src="/loader.gif" alt="Loading..." title="Loading..." style="display: block; margin-right: auto; margin-left: auto; width: 100px; height: 100px;" />').addClass('disabled');
            $.getScript(more_posts_url, function() {
                if ($this) {
                    $this.text('Load more posts').removeClass('disabled');
                }
            });
        });
    }
});
/* Script to lazy load posts using pagination URLs */
function lazyLoad() {
    if (window.pagination_loading) {
        return ;
    }
    let more_posts_url = $('#paginate-infinite-scrolling .pagination .next_page a').attr('href');
    let bufferSpace = 80;
    if (window.screen.width < 600) {
        bufferSpace = 180;
    }
    if (more_posts_url && ($(window).scrollTop() > $(document).height() - $(window).height() - bufferSpace)) {
        window.pagination_loading = true;
        $('#ajax-loader').html('<img src="/loader.gif" alt="Loading..." title="Loading..." style="display: block; margin-right: auto; margin-left: auto; width: 100px; height: 100px;" />');
        $.getScript(more_posts_url).always(function () {
            window.pagination_loading = false;
        });
    }
}