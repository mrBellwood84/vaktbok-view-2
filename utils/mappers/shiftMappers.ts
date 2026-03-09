import {Shift_FlatModel} from "@/models/entities/Shift_FlatModel";
import {Shift} from "@/models/entities/Shift";

export const mapFlatShiftData = (flatData: Shift_FlatModel[]) => {

    const result: Shift[] = flatData.map(d => {
        return {
            id: d.shiftId,
            time: d.shiftTime,
            createdAt: d.shiftCreatedAt,
            employee: {
                id: d.employeeId,
                name: d.employeeName,
                createdAt: d.employeeCreatedAt,
            },
            workday: {
                id: d.workdayId,
                day: d.workdayDay,
                week: d.workdayWeek,
                year: d.workdayYear,
                date: d.workdayDate,
                createdAt: d.workdayCreatedAt,
            },
            shiftCode: d.shiftShiftCodeId ? {
                id: d.shiftCodeId!,
                code: d.shiftCodeCode!,
                createdAt: d.shiftCodeCreatedAt!
            } : undefined,
            shiftRemark: d.shiftShiftRemarkId ? {
                id: d.shiftRemarkId!,
                remark: d.shiftRemarkRemark!,
                createdAt: d.shiftRemarkCreatedAt!
            } : undefined,
            filePath: d.shiftFilePathId ? {
                id: d.filePathId!,
                path: d.filePathPath!,
                createdAt: d.filePathCreatedAt!
            } : undefined
        }
    });

    return result;
}