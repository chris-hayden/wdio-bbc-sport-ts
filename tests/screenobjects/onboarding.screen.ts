class OnboardingScreen {
    public get appDialog () {
        return $('android.app.Dialog');
    }

    public permissionBtn (consent) {
        return $(`//*[@class="android.widget.Button"][@text="${consent}"]`);
    }
}
