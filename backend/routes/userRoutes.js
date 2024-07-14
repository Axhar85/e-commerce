// backend/routes/userRoutes.js
/*

import express from 'express';
import { createUser } from '../controllers/userController.js';

const router = express.Router();

// Define the route to create a user
router.route('/').post(createUser);

export default router;
*/


import express from 'express';
import { createUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(createUser);

export default router;