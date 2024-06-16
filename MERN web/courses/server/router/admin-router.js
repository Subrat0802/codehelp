const express = require("express");
const {getAllUsers, getAllContacts, getAllServices, removeUser, getUserById, updateUserById} = require("../controllers/admin-controllers");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts)
router.route("/services").get(authMiddleware, adminMiddleware, getAllServices)
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById)

router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById)
router.route("/users/removeUser/:id").delete(authMiddleware, adminMiddleware, removeUser)

module.exports = router