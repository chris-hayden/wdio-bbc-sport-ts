import { join } from "path";
import { config as baseConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    ...{
      capabilities: [
        {
          platformName: 'Android',
          'appium:automationName': 'UiAutomator2',
          'appium:deviceName': 'Pixel 4',
          'appium:platformVersion': '11.0',
          'appium:app': join(process.cwd(), './apps/bbc_sport.apk'),
          },
      ],
      specs: [
        '../tests/features/*.feature'
      ]
    }
}
