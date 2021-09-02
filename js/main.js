const _document = $(document);

const showHideMenu = () => {
    _document.find('.k-menu').toggleClass('show')
}

_document.ready(function () {
    _document.on('click', '.nav-link', (e) => {
        showHideMenu();
        let current = $(e.currentTarget);
        _document.find('.nav-link').removeClass('active');
        current.addClass('active');
    })

    _document.on('click', '.navbar-toggler', () => {
        showHideMenu();
    })

    _document.on('click', '.mobile-close', () => {
        showHideMenu();
    })
})