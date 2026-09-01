import { Router, type IRouter } from "express";
import healthRouter from "./health";
import cyberArrayRouter from "./cyber-array";

const router: IRouter = Router();

router.use(healthRouter);
router.use(cyberArrayRouter);

export default router;
