const channel = Math.round(Math.random() * 100000000000);

describe('WebRTC example', () => {
  it('should login both instances to a WebRTC channel', () => {
    browser.url(`https://apprtc.appspot.com/r/${channel}`).click('#confirm-join-button');
    browser.pause(5000);
  });

  it('should start analyzing', () => {
    Edgar.startAnalyzing(() => appController.call_.pcClient_.pc_);
  });

  it('should print out connection information', () => {
    const connection = Edgar.getConnectionInformation();
    console.log('connection:', connection);
  });

  it('should measure connection for 2s', () => {
    Edgar.pause(2000);
    const stats = Edgar.getStats(2000);

    console.log('mean:', stats.mean);
    console.log('min:', stats.min);
    console.log('max:', stats.max);
  });
});
