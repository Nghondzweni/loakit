/// <reference types="mongoose" />
import { SchoolsService } from './schools.service';
export declare class SchoolsController {
    private readonly schoolsService;
    constructor(schoolsService: SchoolsService);
    addSchool(name: string, grade: number): Promise<import("mongoose").Document<any, any, import("./models/school.model").School> & import("./models/school.model").School & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSchools(): Promise<(import("mongoose").Document<any, any, import("./models/school.model").School> & import("./models/school.model").School & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    editSchool(_id: string, name: string, grade: number): Promise<import("mongoose").Document<any, any, import("./models/school.model").School> & import("./models/school.model").School & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteSchool(_id: string): Promise<import("mongoose").Document<any, any, import("./models/school.model").School> & import("./models/school.model").School & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
