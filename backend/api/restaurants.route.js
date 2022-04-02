import express from "express"
import RestaurantsCrtl from "./restaurants.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCrtl.apiGetRestaurants)

export default router