import { config as baseConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    ...{
      capabilities: [
        {
          browserName: 'chrome',
          'wdio:devtoolsOptions': {
              headless: false
          }
        },
      ]
    }
}
