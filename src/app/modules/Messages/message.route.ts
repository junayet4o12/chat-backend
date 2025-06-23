import express from 'express';
import validateRequest, { validateQueryRequest } from '../../middlewares/validateRequest';
import { MessageControllers } from './message.controller';
import auth from '../../middlewares/auth';
import { messageValidation } from './message.validation';

const router = express.Router();

// Send message
router.post(
  '/send',
  auth('USER', 'SUPERADMIN'),
  validateRequest(messageValidation.sendMessage),
  MessageControllers.sendMessage
);

// Get conversation between two users
router.get(
  '/conversation',
  auth('USER', 'SUPERADMIN'),
  validateQueryRequest(messageValidation.getConversation),
  MessageControllers.getConversation
);

// Mark message as read
router.patch(
  '/mark-read/:messageId',
  auth('USER', 'SUPERADMIN'),
  MessageControllers.markMessageAsRead
);

// Delete message
router.delete(
  '/delete/:messageId',
  auth('USER', 'SUPERADMIN'),
  MessageControllers.deleteMessage
);

export const MessageRouters = router;
