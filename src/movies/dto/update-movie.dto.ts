import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

// DTO means "Data Transfer Object"
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}