import { Request, Response } from "express";
import { databaseConnector } from '@/connectors/database';
import { CreateUserRequest, UpdateUserRequest, User } from '@/types/user';
import { extractError } from "@/utils/errors";
import { ObjectId } from "mongodb";

class UserClient {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await databaseConnector.userDB.find().toArray();
      res.json(users);
    }
    catch (error) {
      res.status(500).json({ error: extractError(error) });
    }
  }

  async getUserById(req: Request, res: Response, id: string) {
    try {
      const userID = new ObjectId(id);
      const user = await databaseConnector.userDB.findOne({ _id: userID });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: extractError(error) });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      if (!req.body || !req.body.name || !req.body.email) {
        return res.status(400).json({ error: 'Missing name or email in request body' });
      }

      const request: CreateUserRequest = {
        name: req.body.name,
        email: req.body.email,
        created_at: new Date(),
        updated_at: new Date()
      };

      const { insertedId } = await databaseConnector.userDB.insertOne(request);
      const user: User = {
        id: insertedId.toString(),
        name: request.name,
        email: request.email,
        created_at: request.created_at,
        updated_at: request.updated_at
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: extractError(error) });
    }
  }

  async updateUser(req: Request, res: Response, id: string) {
    try {
      if (!req.body || !req.body.name || !req.body.email) {
        return res.status(400).json({ error: 'Missing name or email in request body' });
      }

      const userID = new ObjectId(id);
      const request: UpdateUserRequest = {
        name: req.body.name,
        email: req.body.email,
        updated_at: new Date()
      };

      const result = await databaseConnector.userDB.updateOne({ _id: userID }, { $set: request });
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ id });
    } catch (error) {
      res.status(500).json({ error: extractError(error) });
    }
  }

  async patchUser(req: Request, res: Response, id: string) {
    try {
      if (!req.body) {
        return res.status(400).json({ error: 'Missing request body' });
      }

      const userID = new ObjectId(id);
      const request: Partial<UpdateUserRequest> = {};
      if (req.body.name) {
        request.name = req.body.name;
      }
      if (req.body.email) {
        request.email = req.body.email;
      }
      request.updated_at = new Date();

      const result = await databaseConnector.userDB.updateOne({ _id: userID }, { $set: request });
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ id });
    } catch (error) {
      res.status(500).json({ error: extractError(error) });
    }
  }

  async deleteUser(req: Request, res: Response, id: string) {
    try {
      const userID = new ObjectId(id);
      const result = await databaseConnector.userDB.deleteOne({ _id: userID });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ id });
    } catch (error) {
      res.status(500).json({ error: extractError(error) });
    }
  }
}

export const userClient = new UserClient();