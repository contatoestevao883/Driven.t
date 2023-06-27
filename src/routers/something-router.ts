import { Router } from "express";

import * as somethingController from "../controllers/something-controller"

const somethingRouter = Router()

somethingRouter.get("/games", somethingController.getSomething)
somethingRouter.post("/games", somethingController.createSomething)

export default somethingRouter