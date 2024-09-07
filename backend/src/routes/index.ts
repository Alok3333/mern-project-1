import { Router } from 'express';
import { loggedInUser, login } from '../controllers/AuthController';
import {
  createEmployee,
  getEmployees,
  updateEmployee,
} from '../controllers/EmployeeController';

const router = Router();

// Auth
router.post('/auth/login', login);
router.get('/auth/me', loggedInUser);

// Employee
router.post('/employee/create', createEmployee);
router.put('/employee/update/:id', updateEmployee);
router.get('/employee/list', getEmployees);

export default router;
