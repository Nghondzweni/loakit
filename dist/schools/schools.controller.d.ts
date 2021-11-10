import { SchoolsService } from './schools.service';
export declare class SchoolsController {
    private readonly schoolsService;
    constructor(schoolsService: SchoolsService);
    addSchool(name: string, grade: number): Promise<{
        id: import("mongoose").Document<any, any, import("./models/school.model").School> & import("./models/school.model").School & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
