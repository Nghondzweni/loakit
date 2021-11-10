import { Model } from 'mongoose';
import { School } from './models/school.model';
export declare class SchoolsService {
    private readonly schoolModel;
    private schools;
    constructor(schoolModel: Model<School>);
    insertSchool(name: string, grade: number): Promise<import("mongoose").Document<any, any, School> & School & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSchools(): Promise<(import("mongoose").Document<any, any, School> & School & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
