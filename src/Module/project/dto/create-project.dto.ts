import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateProjectDto {

    @IsNumber()
    @IsNotEmpty()
    STUDENT_ID: number;

    @IsString()
    @IsNotEmpty()
    TITLE: string;

    @IsString()
    @IsNotEmpty()
    PROJECT_SUBJECT: string;

    @IsNumber()
    @IsNotEmpty()
    PROJECT_MARKS: number;
}
