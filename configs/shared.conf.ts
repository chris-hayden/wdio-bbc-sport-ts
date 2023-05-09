import type { Options } from '@wdio/types';
import { generate } from 'multiple-cucumber-html-reporter';
import fsx from 'fs-extra';
const { removeSync } = fsx;

export const config: WebdriverIO.Config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    port: 4723,

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        // ToDo: define location for spec files here
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [{
    }],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'cucumber',
    reporters: [
        'spec',
        [
            'cucumberjs-json', {
                jsonFolder: './tests/reports/json',
                language: 'en',
            },
        ],
    ],
    cucumberOpts: {
        require: [
            './tests/steps/given.ts',
            './tests/steps/when.ts',
            './tests/steps/then.ts',
        ],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    // =====
    // Hooks
    // =====
    onPrepare: (config, capabilities) => {
        // Remove report folders
        removeSync('./tests/reports/json/');
        removeSync('./tests/reports/cucumber-html-report/');
    },

    onComplete: (exitCode, config, capabilities, results) => {
        // Generate Cucumber-HTML Report from jsonDir
        generate({
            jsonDir: './tests/reports/json/',
            reportPath: './tests/reports/cucumber-html-report/',
        });
    }
}
