// * TONE JS
const cheerio = require("cheerio");
const request = require("request");
let html;
// request to get html from github
request("https://github.com/nielsenjared", function (error, response, html) {
    // loads html into $ constant
    // console.log(html);
    const $ = cheerio.load(html);
    // one square
    // console.log($("rect").attr());

    // grab all squares
    const fruits = [];
    $('rect').each(function (i, elem) {
        // console.log($(this).attr());
    });
    fruits.join(', ');

    // only use squares that have some commits
    $('rect').each(function (i, elem) {
        // console.log($(elem).attr('fill'));
    });
    // add squares by week into an object


    var data = {}; $("g g").each(function (i, element) {
        data['w' + i] = [
            $(element).children().eq(0).attr("fill"),
            $(element).children().eq(1).attr("fill"),
            $(element).children().eq(2).attr("fill"),
            $(element).children().eq(3).attr("fill"),
            $(element).children().eq(4).attr("fill"),
            $(element).children().eq(5).attr("fill"),
            $(element).children().eq(6).attr("fill")
        ]
    });
    console.log(data);
})



