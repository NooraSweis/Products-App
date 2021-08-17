module.exports = {
    addProductPage: (req, res) => {
        res.render("add_product.ejs", {
            message: "",
            title: "Add Product"
        });
    },

    addProduct: (req, res) => {
        res.render("add_product.ejs", {
            message: "Not Working yet",
            title: "Add Product"
        });
    }
}