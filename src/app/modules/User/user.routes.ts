import express from 'express';
import auth from '../../middlewares/auth';
import { UserControllers } from './user.controller';
const router = express.Router();


router.get('/', UserControllers.getAllUsers);

router.get('/me', auth('USER', 'ADMIN'), UserControllers.getMyProfile);
router.get(
  '/friends',
  auth('SUPERADMIN', 'USER'),
  UserControllers.allFriends,
);

router.get('/:id', UserControllers.getUserDetails);
router.put(
  '/update-profile',
  auth('USER', 'ADMIN', 'SUPERADMIN'),
  UserControllers.updateMyProfile,
);

router.put(
  '/update-user/:id',
  auth('ADMIN'),
  UserControllers.updateUserRoleStatus,
);


export const UserRouters = router;
