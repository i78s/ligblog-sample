var changelog = require("conventional-changelog");
var fs = require("fs");

changelog({
    repository: 'https://github.com/i78s/ligblog-sample',
    version: require('./package.json').version
}, function(err, log) {
    fs.writeFileSync("./CHANGELOG.md", log);
});