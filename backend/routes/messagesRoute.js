const {
  addMessage,
  getAllMessage,
} = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessage);
// router.post("/setAvatar/:id", setAvatar);
// router.get("/allusers/:id", getAllUsers);

module.exports = router;
