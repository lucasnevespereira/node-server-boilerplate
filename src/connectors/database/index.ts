import { Collection, Db, MongoClient } from "mongodb";
import config from "@/config";

class DatabaseConnector {
  client: MongoClient;
  database: Db
  userDB: Collection

  constructor(dbUrl: string, dbName: string) {
    this.client = new MongoClient(dbUrl);
    this.connect();
    this.database = this.client.db(dbName);
    this.userDB = this.database.collection('users');
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Successfully connected to database.");
    } catch (error) {
      console.error("Failed to connect to database:", error);
    }
  }

  async close() {
    await this.client.close();
    console.log("Disconnected from database.");
  }
}

export const databaseConnector = new DatabaseConnector(config.DB_URL, config.DB_NAME);