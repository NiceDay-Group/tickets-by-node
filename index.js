'use strict';

var app = require('./lib/init/app');
var mongoose = require('./lib/init/mongoose');
var passport = require('./lib/init/passport');

mongoose.connect(config.mongoUrl);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./lib/routes/api'));

app.listen(config.port, () => {
  console.log('Node app is running on port', config.port);
});
