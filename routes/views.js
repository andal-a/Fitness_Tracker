//Depedencies
const path = require("path");

module.exports = function(app) {
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //Called when "Countinue Workout" or "New Workout" is clicked in index.html
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // Not quite sure what this is used for yet ....
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}