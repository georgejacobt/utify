const router = require("express").Router();
const searchController = require("../../controllers/searchController");

//matches with "/api/search"

router.route("/").post(searchController.search);

module.exports = router;
