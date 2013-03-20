
/*
 * GET home page.
 */

var http = require('http');

exports.index = function(req, res){
  res.render('index', {title: 'Vote'})
};

exports.input = function(req, res){
  res.render('input', {title: 'Vote'})
};

exports.confirm = function(req, res){
  console.log(req.body);
  // keep password to session
  req.session.password = req.body.password;
  console.log(req.session.password);

  res.render('confirm', {title: 'Vote', items: req.body})
};

exports.regist = function(req, res){
  console.log(req.session.password);
  req.body['password'] = req.session.password;

  // send request to API
  var options = {
    host: '',
    port: 3333,
    path: '/1.0/questions/post/',
    method: 'PUT'
  };

  var request = http.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data', function(chunk){
      console.log('BODY: ' + chunk);
    });
  });

  request.on('error', function(e){
    console.log('problem with request: ' + e.message);
  });

  request.write(req.body);
  request.end();

  res.render('regist', {title: 'Vote'})
};

exports.display = function(req, res){
  var body = '';

  // get responce from API
  /*
  var options = {
    host: 'www.google.co.jp',
    port: 80,
    path: '/index.html'
  };

  http.get(options, function(res){
    console.log("Got response: " + res.statusCode);
    
    res.on('data', function(chunk){
      console.log('BODY: ' + chunk);
      body = chunk;
    });
  }).on('error', function(e){
    console.log("Got error: " + e.message);
  });
  */

  body = {
    qid: 123456,
    title: 'これ、どれがいいですか？',
    text: 'これとあれとそれで迷ってるんですが、どれがいいですか？',
    choices: [
      {
        id: 1,
        choice: 'windows phone',
        vote: 10
      },
      {
        id: 2,
        choice: 'android',
        vote: 20
      },
      {
        id: 3,
        choice: 'iphone',
        vote: 70
      }
    ],
    username: 'kein'
  };

  res.render('display', {title: 'Vote', items: body})
};

exports.edit = function(req, res){
};