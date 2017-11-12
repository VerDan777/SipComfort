import $ from 'jquery';

class Scroll {
    constructor() {
        this.link = $('.main-menu__link');
        this.events();
    }
        events() {
            this.link.click(function(e) {
            e.preventDefault();
            var section = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(section).offset().top
    });
});
}
}
export default Scroll;