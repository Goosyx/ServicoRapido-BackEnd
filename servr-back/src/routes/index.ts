import express from "express";
import { addressRoute } from "./addressRoute";
import { userRoute } from "./userRoute";
import { uploadRoute } from "./uploadRoute";
import { productRoute } from "./productRoute";
import { imagesRoute } from "./imagesRoute";
import { userAuthenticateRoute } from "./authRoute";
import { storeRoute } from "./storeRoute";
import { clientRoute } from "./clientRoute";
import { clientAuthenticateRoute } from "./authClientRoute ";
import { cartRoute } from "./cartRoute";
import { cartItemRoute } from "./cartItemRoute";
import { paymentRoute } from "./paymentRoute";

export const route = express.Router();

route.use("/user", userRoute);
route.use("/address", addressRoute);
route.use("/store", storeRoute);
route.use("/upload", uploadRoute);
route.use("/product", productRoute);
route.use("/images", imagesRoute);
route.use("/auth", userAuthenticateRoute);
route.use("/auth/client", clientAuthenticateRoute);
route.use("/client", clientRoute);
route.use("/cart", cartRoute);
route.use("/cartItem", cartItemRoute);
route.use("/payment", paymentRoute);
