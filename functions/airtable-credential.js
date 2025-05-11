import dotenv from "dotenv";
import Airtable from "airtable-node";

dotenv.config();

class LoadAirtable {
  constructor(tableName) {
    this.apiKey = process.env.AIRTABLE_API_TOKEN;
    this.baseID = process.env.AIRTABLE_BASE_ID;
    this.tableName = tableName;
    this.base = new Airtable({ apiKey: this.apiKey })
      .base(this.baseID)
      .table(this.tableName);
  }

  async allRows() {
    try {
      return await this.base.list({ maxRecords: 100 });
    } catch (error) {
      throw new Error("Failed to fetch records: " + error.message);
    }
  }
}

export default LoadAirtable;
