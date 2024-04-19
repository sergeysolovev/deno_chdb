import { query } from "chdb";

const res = query("SELECT version(), 'Hello chDB', chdb()", "CSV");
console.log("Standalone Query Result:", res);
