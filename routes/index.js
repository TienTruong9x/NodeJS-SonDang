const newsRoute = require('./NewRoute');
const siteRoute = require('./SiteRoute');
const courseRoute = require('./CourseRoute');
const meRoute = require('./MeRoute');

function routes(app) {
    app.use('/me', meRoute);
    app.use('/news', newsRoute);
    app.use('/course', courseRoute);
    app.use('/', siteRoute);
}

module.exports = routes;
