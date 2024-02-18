import { Router } from "express";
import Routes from "../constants/appRoutes";
import searchWikipedia from "../controller/searchWikipedia";

const router = Router();

router.get(Routes.Search, searchWikipedia);

export default router;
