describe('socket.io chat', () => {
  it('should login the browser', () => {
    browser.url('http://localhost:3000/');
    browser.pause(5000);

    Edgar.setValue('.usernameInput', 'Edgar');
    Jim.setValue('.usernameInput', 'Jim');
    browser.pause(2000);

    browser.keys('Enter');
    browser.pause(2000);
  });

  it('should post "Hello" with Edgar', () => {
    Edgar.setValue('.inputMessage', 'Hey Whats up!');

    Edgar.pause(1000);
    Edgar.keys('Enter');

    Edgar.pause(2000);
    Edgar.setValue('.inputMessage', 'My name is SeConf16').keys('Enter');
  });

  it('should response with Jim', () => {
    Jim.pause(2000);

    const message = Jim.getText('.messageBody*=My name is');
    const name = message.slice(11);

    Jim.setValue('.inputMessage', 'Hello ' + name + '! How are you today?').keys('Enter');
    Jim.pause(2000);
  });
});
