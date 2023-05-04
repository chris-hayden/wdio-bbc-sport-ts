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

    public get backBtn () {
        return $('~Navigate up');
    }

    public get home () {
        return $('~Home');
    }

    public get mySport () {
        return $('~My Sport');
    }

    public get scores () {
        return $('~Scores');
    }

    public get guide () {
        return $('~Guide');
    }

    public get allSport () {
        return $('~All Sport');
    }

    public get livePulse () {
        return $('[content-desc="Live:"]');
    }
}
