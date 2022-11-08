import express from 'express';
import controllerHome from '../controllers/home';

let router = express.Router();

// Home
router.get('/', controllerHome.index);

export default router;