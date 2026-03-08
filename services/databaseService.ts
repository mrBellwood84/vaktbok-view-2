"use server"

import { Employee } from "@/models/entities/Employee";
import { createPool} from "mysql2/promise";
import { Workday } from "@/models/entities/Workday";
import { ShiftCode } from "@/models/entities/ShiftCode";
import { ShiftRemark } from "@/models/entities/ShiftRemark";

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    dateStrings: true,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const baseDatabaseQuery = async <T>(query: string, params?: string[]): Promise<T[]> => {
    try {
        const [ rows ] = await pool.query(query, params);
        let data;
        if (Array.isArray(rows) && Array.isArray(rows[0])) data = rows[0];
        else data = rows;
        return data as T[];

    } catch (error) {
        console.error("Database query failed with error: ", error);
        throw error;
    }
}

const queries = {
    getAllEmployees: "CALL GetAllEmployees()",
    getAllWorkdays: "CALL GetAllWorkdays()",
    getAllShiftCodes: "CALL GetAllShiftCodes()",
    getAllShiftRemarks: "CALL GetAllShiftRemarks()",
};

export const getAllEmployeesAsync = async () =>
    await baseDatabaseQuery<Employee>(queries.getAllEmployees);

export const getAllWorkdaysAsync = async () =>
    await baseDatabaseQuery<Workday>(queries.getAllWorkdays);

export const getAllShiftCodesAsync = async () =>
    await baseDatabaseQuery<ShiftCode>(queries.getAllShiftCodes);

export const getAllShiftRemarksAsync = async () =>
    await baseDatabaseQuery<ShiftRemark>(queries.getAllShiftRemarks);
