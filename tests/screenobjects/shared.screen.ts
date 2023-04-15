export default class Shared {
    public get toolBar () {
        return $('[resource-id="toolbar"]');
    }

    public get bbcLogo () {
        return $('[resource-id="bbc_toolbar_logo"]');
    }

    public get hamburgerMenuOpen () {
        return $('~Open Menu');
    }

    public get bottomNavBar () {
        return $('[resource-id="bottom_nav"]');
    }
}
