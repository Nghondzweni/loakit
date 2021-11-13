import * as mongoose from 'mongoose';
export declare const SchoolSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface School {
    name: string;
    grade: number;
}
