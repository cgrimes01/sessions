const express = require('express');
const fatherTedService = require('../services/father-ted-service');

const fatherTedRouter = express.Router();

function router() {
  fatherTedRouter.route('/quotes')
    .get(async (req, res) => {
        const textExamples = await fatherTedService.getFatherTedQuotes();
        res.json(textExamples);
      });
  fatherTedRouter.route('/randomquote')
    .get(async (req, res) => {
        const textExamples = await fatherTedService.randomFatherTedQuote();
        res.json(textExamples);
      });
  fatherTedRouter.route('/randomcharacterquote/:charactername')
    .get(async (req, res) => {
      const { charactername } = req.params;
      const textExamples = await fatherTedService.randomCharacterQuote(charactername);
      res.json(textExamples);
    });
    
  return fatherTedRouter;
};
  
module.exports = router;
