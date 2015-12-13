$(document).ready(function () {
    var offcanvas = $('.offcanvas-menu');
    var offcanvasHandler = $('.offcanvas-handler');
    var offcanvasContainer = $('.offcanvas-container');
    var body = $('body');

    offcanvasHandler.click(function (e) {
        e.stopPropagation();
        offCanvasToggler();
    });

    offcanvasContainer.click(function () {
        if (body.hasClass('offcanvas-open')) {
            offCanvasToggler();
        }
    });

    function offCanvasToggler() {
        offcanvasContainer.toggleClass('offcanvas-open');
        body.toggleClass('offcanvas-open');
        offcanvas.toggleClass('offcanvas-open');
    }

});