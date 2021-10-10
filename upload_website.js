/* Initailise the AWS 
    - Region
    - bucket name (Very Important!!!!!!)
    - API version 
*/
var 
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-east-1"
    }),
    FS = require("fs"),
    bucket_name_str = "myappleappstore";


//converts the HTML/Javascript/png files to binary before uploading

function uploadItemAsBinary(key_name_str, content_type_str, bin){
    var params = {
        Bucket: bucket_name_str,
        Key: key_name_str,
        Body: bin,
        ContentType: content_type_str,
        CacheControl: "max-age=0"
    };
    S3API.putObject(params, function(error, data){
        console.log(error, data);
    });
}

(function init(){

    //Upload all files to the File Tree of AWS S3 from cloud9 console

    // upload HTML files
    var index_bin = FS.readFileSync("website/index.html");
    uploadItemAsBinary("index.html", "text/html", index_bin);

    var all_games_bin = FS.readFileSync("website/all_games.html");
    uploadItemAsBinary("all_games.html", "text/html", all_games_bin);

    var apps_bin = FS.readFileSync("website/apps.html");
    uploadItemAsBinary("apps.html", "text/html", apps_bin);

    var customer_bin = FS.readFileSync("website/customer.html");
    uploadItemAsBinary("customer.html", "text/html", customer_bin);  

    var games_bin = FS.readFileSync("website/games.html");
    uploadItemAsBinary("games.html", "text/html", games_bin);  

    var Login_bin = FS.readFileSync("website/Login.html");
    uploadItemAsBinary("Login.html", "text/html", Login_bin); 

    // Upload Javascript files
    var policy_bin = FS.readFileSync("website/policy.js");
    uploadItemAsBinary("policy.js", "application/javascript", policy_bin);

    var product_bin = FS.readFileSync("website/product.html");
    uploadItemAsBinary("product.html", "text/html", product_bin);  

    var signup_bin = FS.readFileSync("website/signup.html");
    uploadItemAsBinary("signup.html", "text/html", signup_bin);  

    var upload_website_bin = FS.readFileSync("website/upload_website.js");
    uploadItemAsBinary("upload_website.js", "application/javascript", upload_website_bin);

    var upload_config_bin = FS.readFileSync("website/upload_config.js");
    uploadItemAsBinary("upload_config.js", "application/javascript", upload_config_bin);

    var show_on_scroll_bin = FS.readFileSync("website/javscripts/show-on-scroll.js");
    uploadItemAsBinary("show-on-scroll.js", "application/javascript", show_on_scroll_bin); 


    // upload CSS files
    var fly_in_css_bin = FS.readFileSync("website/stylesheets/fly-in.css");
    uploadItemAsBinary("fly-in.css", "text/css", fly_in_css_bin);

    var main_css_bin = FS.readFileSync("website/stylesheets/main.css");
    uploadItemAsBinary("main.css", "application/javascript", main_css_bin);

    var scroll_css_bin = FS.readFileSync("website/stylesheets/scroll.css");
    uploadItemAsBinary("scroll.css", "application/javascript", scroll_css_bin);

    var slide_in_css_bin = FS.readFileSync("website/stylesheets/slide-in.css");
    uploadItemAsBinary("slide-in.css", "application/javascript", slide_in_css_bin);

    var simple_css_bin = FS.readFileSync("website/stylesheets/simple.css");
    uploadItemAsBinary("simple.css", "application/javascript", simple_css_bin);
})();





