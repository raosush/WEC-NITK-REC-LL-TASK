$(document).ready(function () {
    if ($('#paginate-infinite-scrolling').size() > 0) {
        $(window).on('scroll', _.throttle(lazyLoad, 100));
    }

    if ($('#paginate-load-more').size() > 0) {
        $('#load-more-button').show().click(function() {
            let more_posts_url = $('#paginate-load-more .pagination .next_page a').attr('href');
            $this = $(this);
            $this.html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..." />').addClass('disabled');
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
    let more_posts_url = $('#paginate-infinite-scrolling .pagination .next_page a').attr('href');
    if (more_posts_url && ($(window).scrollTop() > $(document).height() - $(window).height() - 60)) {
        $('#ajax-loader').html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..." />');
        $.getScript(more_posts_url);
    }
}