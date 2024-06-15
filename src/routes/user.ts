import express, { Request, Response } from 'express';
import { userClient } from '@/clients/user';

const router = express.Router();

router.get('/', (req: Request, res: Response) => userClient.getUsers(req, res));

router.get('/:id', (req: Request, res: Response) => userClient.getUserById(req, res, req.params.id));

router.post('/', (req: Request, res: Response) => userClient.createUser(req, res))

router.put('/:id', (req: Request, res: Response) => userClient.updateUser(req, res, req.params.id));

router.patch('/:id', (req: Request, res: Response) => userClient.patchUser(req, res, req.params.id));

router.delete('/:id', (req: Request, res: Response) => userClient.deleteUser(req, res, req.params.id));


export default router;