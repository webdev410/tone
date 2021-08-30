const router = require("express").Router();



// tone
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
}); app.get("/scrape/:username", function (req, res) {
    var username = req.params.username; var url = "https://github.com/" + username; request(url, function (error, response, html) {
        var data = {};
        // var $ = cheerio.load(html);
        try {
            var $ = cheerio.load(html)
        } catch (e) {
            console.log("cheerio err"); // TODO handle error
        } $("g g").each(function (i, element) {
            data['w' + i] = [];
            for (var j = 0; j < $(element).children().length; j++) {
                data['w' + i].push($(element).children().eq(j).attr("fill"));
            }
        });
        return res.json(data);
    })
});//end app.get("/scrape")

module.exports = router;
