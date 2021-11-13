import { Model } from 'mongoose';
import { School } from './models/school.model';
export declare class SchoolsService {
    private readonly schoolModel;
    constructor(schoolModel: Model<School>);
    addSchool(name: string, grade: number): Promise<import("mongoose").Document<any, any, School> & School & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSchools(): Promise<(import("mongoose").Document<any, any, School> & School & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    editSchool(_id: string, name: string, grade: number): Promise<import("mongoose").Document<any, any, School> & School & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteSchool(_id: string): Promise<import("mongoose").Document<any, any, School> & School & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
