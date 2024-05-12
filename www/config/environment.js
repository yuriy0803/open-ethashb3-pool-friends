/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'open-etc-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//192.168.178.41/',

      // HTTP mining endpoint
      HttpHost: 'http://192.168.178.41',
      HttpPort: 8888,

      // Stratum mining endpoint
      StratumHost: '192.168.178.41',
      StratumPort: 8008,

      blockExplorerLink: 'https://explorer.test.network/',
      blockExplorerLink_tx: 'https://explorer.test.network/tx/',
      blockExplorerLink_uncle: 'https://explorer.test.network/uncles/',
      blockExplorerLink_block: 'https://etc.explorer.com/block/',
      blockExplorerLink_address: 'https://explorer.test.network/address/',

      // The ETC network
      Unit: 'ETC',
      Mining: 'SOLO',

      // Fee and payout details
      PoolFee: '1.0%',
      PayoutThreshold: '0.5 ETC',
      BlockReward: 2.56,

      // For network hashrate (change for your favourite fork)
      BlockTime: 14.4,
      highcharts: {
        main: {
          enabled: true,
          height: 200,
          type: 'spline',
          color: '',
          labelColor: '#909090',
          lineColor: '#404850',
          tickColor: '#404850',
          gridLineColor: '#404850',
          gridLineWidthX: 1,
          gridLineWidthY: 1,
          backgroundColor: 'transparent',
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000
        },
        account: {
          enabled: true,
          height: 300,
          type: 'spline',
          color: ['', ''],
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000,
          paymentInterval: 30000
        }
      }
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
