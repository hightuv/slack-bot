const commands = require('./commands');
const handlers = require('./handlers');

function init(app) {
  commands.algoBot(app);
  handlers.checkSelected(app);
  handlers.sampleCode(app);
  handlers.selectAccuracy(app);
  handlers.selectDifficulty(app);
  handlers.selectSolvedCount(app);
  handlers.refreshRecommendation(app);
  handlers.sayAlgorithm(app);
}

module.exports = { init };
