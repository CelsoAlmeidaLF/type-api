import express from 'express';
import { ControllerHome } from '../controllers/home';

let router = express.Router();
let home = new ControllerHome();

// Home
router.get('/', home.index);

export = router;