
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {title: 'Vote'})
};

exports.input = function(req, res){
  res.render('input', {title: 'Vote'})
};

exports.confirm = function(req, res){
  console.log(req.body);
  req.session.password = req.body.password;
  console.log(req.session.password);
  
  res.render('confirm', {title: 'Vote', items: req.body})
};

exports.regist = function(req, res){
  console.log(req.session.password);
  
  res.render('regist', {title: 'Vote'})
};