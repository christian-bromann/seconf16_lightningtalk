SeConf16 Lightning Talk
=======================

This repository contains all example files of my SeConf16 lightning talk on multiremote testing with [WebdriverIO](http://webdriver.io/).

## Installation

You need a NodeJS version >= 5.10.1. Then run:

```sh
$ npm i
```

Make sure you have a Selenium standalone server running at `localhost:4444`.

## Chat Example

Shows how to use two browser to open a chat application and assert if one browser can send a message whereas the other can receive it. To run the example call:

```sh
$ npm run chat
```

For this example you need a chat application. The one that is used in the example is from [Socket.io](https://github.com/socketio/socket.io/tree/master/examples/chat).

## WebRTC Example

Shows two browser connect to a WebRTC video/audio chat. Using [WebdriverRTC](https://github.com/webdriverio/webdriverrtc) it measures metrics on that WebRTC session from the `RTCPeerConnection` and prints out the min, max and mean. To run the example call:

```sh
$ npm run webrtc
```

## Talk Test

At the end I tried an experiment where I ask the audience to applaud so we can test the awesomeness of my talk. The test will connect two browser to a WebRTC video chat and asserts the audio input in order to validate if the audience liked the talk or not. To run the example call:

```sh
$ npm test
```

And yes, my talk passed. Wooohoo 👏 👏 👏
