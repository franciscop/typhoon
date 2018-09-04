const server = require('server');
const { get, post } = server.router;
const { render } = server.reply;

server(
  () => {
    const news = [];


    return render('index.hbs', news);
  }
);
