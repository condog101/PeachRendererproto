/**
 * Created by Connor on 10/12/2016.
 */


var request = require("request"),
    cheerio = require("cheerio"),
    url = 'https://www.wolframalpha.com/examples/MedicalTests.html';//target website

request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('div.col2').each(function(i, element){//id of data to be pulled
            var a = $(this);
            var fs = require('fs');
            fs.writeFile("content/output.txt", a.text(), function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
        });
    }
});