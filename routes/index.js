module.exports = {
    mainPage: (req, res) => {
        res.render("index.ejs", {
            "data": "No data",
            title: "Main Page"
        });
    }
}