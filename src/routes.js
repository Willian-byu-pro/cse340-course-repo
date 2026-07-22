
import express from 'express';
const router = express.Router();

import { showOrganizationsPage, showOrganizationDetailsPage } from './controllers/organizations.js';

router.get('/organizations', showOrganizationsPage);
router.get('/organization/:id', showOrganizationDetailsPage);

export default router;

