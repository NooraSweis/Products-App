module.exports = {
    addProductPage: (req, res) => {
        res.render("add_product.ejs", {
            message: "",
            title: "Add Product"
        });
    }
}