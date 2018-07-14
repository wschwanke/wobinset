const path = require('path');
const router = require('express').Router();
const v1 = require('./v1');

// Require route functions
const helpers = require('./helpers/common.js');

router.use('/api/v1', v1);

// Catch all route.
// Will check to see if someone is trying to access a file that doesn't exist and send a 404 error
// otherwise it will server up the index.html
router.get('/*', (req, res) => {
  if (helpers.checkForFileExt(req.url) === false) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
