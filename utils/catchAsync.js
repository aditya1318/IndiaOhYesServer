module.exports = middleWareFn => (req, res, next) => middleWareFn(req, res, next).catch(next);