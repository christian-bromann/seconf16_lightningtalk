const channel = Math.round(Math.random() * 100000000000);
const assert = require('assert');

describe('WebRTC example', () => {
  it('should login both instances to a WebRTC channel', () => {
    browser.url(`https://apprtc.appspot.com/r/${channel}`).click('#confirm-join-button');
    browser.pause(5000);
  });

  it('should start analyzing', () => {
    Edgar.startAnalyzing(() => appController.call_.pcClient_.pc_);
  });

  it('should measure connection for 2s', () => {
    Edgar.pause(5000);
    const stats = Edgar.getStats(5000);

    awesomenessLevel = stats.max.audio.outbound.inputLevel;
    console.log(stats.max.audio);
    console.log(`This talk is ${awesomenessLevel} points awesome`);
    assert.ok(awesomenessLevel > 10000, 'Buuuu, this talk sucked!!!');
  });
});
