module.exports = {
    addProductPage: (req, res) => {
        res.render("add_product.ejs", {
            message: "",
            title: "Add Product"
        });
    },

    addProduct: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No Product Image Uploaded");
        }
        let message = '',
            title = req.body.title,
            category = req.body.category,
            description = req.body.description,
            quantity = req.body.quantity,
            price = req.body.price,
            UploadedFile = req.files.image;

        let insertQuery = "INSERT INTO product (title,quantity,"
            + " price, category, image, description)"
            + ` VALUES ('${title}', ${quantity}, ${price}, '${category}',`
            + ` '${UploadedFile.name}', '${description}');`;
        pool.query(insertQuery, (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        });

        res.render("add_product.ejs", {
            message: insertQuery,
            title: "Add Product"
        });
    }
}