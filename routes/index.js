
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
  // req.session.password = req.body.password;
  req.session.password = '';
  console.log(req.session.password);

  res.render('confirm', {title: 'Vote', items: req.body})
};

exports.regist = function(req, res){
  console.log(req.session.password);
  req.body['password'] = req.session.password;

  // send request to API
  var options = {
    host: '192.168.11.32',
    port: 8099,
    path: '/questions/post',
    method: 'PUT',
    headers: {
      'Content-Type': 'text/json'
    }
  };

  var request = http.request(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(chunk){
      console.log('BODY: ' + chunk);
      res.render('regist', {title: 'Vote', qid: JSON.parse(chunk)['_id']['$oid']})
    });
  });

  request.on('error', function(e){
    console.log('problem with request: ' + e.message);
  });

  request.write(JSON.stringify(req.body));
  request.end();
};

exports.display = function(req, res){
  console.log(req.query.qid);

  req.session.qid = req.query.qid;

  // get response from API
  var options = {
    host: '192.168.11.32',
    port: 8099,
    path: '/questions/get?qid=' + req.query.qid
  };

  http.get(options, function(response){
    console.log('Got response: ' + response.statusCode);
    
    response.on('data', function(chunk){
      console.log('BODY: ' + chunk);
      console.log(JSON.parse(chunk));
      res.render('display', {title: 'Vote', items: JSON.parse(chunk)})
    });
  }).on('error', function(e){
    console.log('Got error: ' + e.message);
  });
  /*
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
  */

  // res.render('display', {title: 'Vote', items: body})
};

exports.edit = function(req, res){
};

exports.vote = function(req, res){
  req.body['qid'] = req.session.qid;

  // send request to API
  var options = {
    host: '192.168.11.32',
    port: 8099,
    path: '/questions/vote',
    method: 'POST',
    headers: {
      'Content-Type': 'text/json'
    }
  };

  var request = http.request(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function(chunk){
      console.log('BODY: ' + chunk);
      res.render('vote', {title: 'Vote', items: JSON.parse(chunk)})
    });
  });

  request.on('error', function(e){
    console.log('problem with request: ' + e.message);
  });

  request.write(JSON.stringify(req.body));
  request.end();
};