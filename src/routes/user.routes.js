import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  currentUser,
  updateProfileDetails,
  changeAvatar,
  changeCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//post

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),

  registerUser
);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

//get

router.route("/current-user").get(verifyJWT, currentUser);

//patch

router
  .route("/change-avatar")
  .patch(verifyJWT, upload.single("avatar"), changeAvatar);

router
  .route("/change-coverimage")
  .patch(verifyJWT, upload.single("coverImage"), changeCoverImage);

router.route("/change-password").patch(verifyJWT, changeCurrentPassword);
router.route("/update-profile").patch(verifyJWT, updateProfileDetails);

export default router;
