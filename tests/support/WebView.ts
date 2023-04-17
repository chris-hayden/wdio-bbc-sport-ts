export const context_ref = {
    NATIVE: 'native',
    WEBVIEW: 'webview',
};

const ready_state = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading'
};

class WebView {
    async waitForWebViewContextLoaded () {
        await driver.waitUntil( async () => {
            const currentContexts = await this.getCurrentContexts();
            return currentContexts.length > 1 && currentContexts.find(context => context.toLowerCase().includes(context_ref.WEBVIEW)) !== 'undefined';
        }, {
                timeout: 30000,
                timeoutMsg: 'WebView context not loaded',
                interval: 100,
            },
        );
    }

    async switchToContext(context:string) {
        await driver.switchContext((await this.getCurrentContexts())[context === context_ref.NATIVE ? 0 : 1]);
    }

    async getCurrentContexts():Promise<any[]> {
        return driver.getContexts();
    }

    async waitForFullyLoaded() {
        await driver.waitUntil(
            async () => (await driver.execute(() => document.readyState)) === ready_state.COMPLETE,
            {
                timeout: 30000,
                timeoutMsg: 'Website not loaded',
                interval: 100
            },
        );
    }

    async waitForWebsiteLoaded() {
        await this.waitForWebViewContextLoaded();
        await this.switchToContext(context_ref.WEBVIEW);
        await this.waitForFullyLoaded();
        await this.switchToContext(context_ref.NATIVE);
    }
}

export default WebView;
