import WebView from "../support/WebView.js";

class WebViewScreen extends WebView {
    async waitForWebViewIsDisplayedByXpath(isShown = true): Promise<boolean|void> {
        const selector =  browser.isAndroid ? '*//android.webkit.WebView' : '*//XCUIElementTypeWebView';

        return $(selector).waitForDisplayed({
            timeout: 45000,
            reverse: !isShown,
        });
    }
}

export default new WebViewScreen();