var async = require('async');
var _ = require('lodash');
var siteInfoService = require('../services/site-info.service');
var featuresService = require('../services/features.service');
var ENV = process.env.NODE_ENV;
var envConfig = require('../../config/env.config.js');

/**
 * Banner
 * @param {Object} req
 * @param {Object} res
 */
module.exports = function (req, res) {
  var lang = 'zh'
  if (req.query.lang) {
     // do something with language string
     lang = req.query.lang;
  }
  async.parallel({
    siteInfo: siteInfoService.get,
    features:featuresService.all
  }, function(err, results){
    if (err) return res.status(500).end();
    res.render('banner', {
      layout: 'layout-default',
      host: envConfig[ENV].host,
      lang: lang,
      siteInfo: results.siteInfo,
      features: results.features
    });
  });
};
