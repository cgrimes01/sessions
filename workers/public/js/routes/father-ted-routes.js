const express = require('express');
const fatherTedService = require('../services/father-ted-service');

const fatherTedRouter = express.Router();

function router() {
  fatherTedRouter.route('/quotes')
    .get(async (req, res) => {
        const textExamples = await fatherTedService.getFatherTedQuotes();
        res.json(textExamples);
      });
  return fatherTedRouter;
};
  
module.exports = router;
