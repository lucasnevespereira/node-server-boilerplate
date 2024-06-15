import express, { Request, Response } from 'express';
import config from '@/config';
import userRouter from '@/routes/user';

const server = express();

server.use(express.json());

server.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'up' });
});

server.use('/users', userRouter);

server.listen(config.PORT, () => {
  console.log(`[${config.APP_ENV}] ${config.APP_NAME} is running on port ${config.PORT}`);
});