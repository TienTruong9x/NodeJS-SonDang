const newsRoute = require('./NewRoute');
const siteRoute = require('./SiteRoute');

function routes(app) {
    app.use('/', siteRoute);
    app.use('/news', newsRoute);
}

module.exports = routes;
