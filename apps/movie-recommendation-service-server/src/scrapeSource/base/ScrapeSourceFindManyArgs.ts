/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScrapeSourceWhereInput } from "./ScrapeSourceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ScrapeSourceOrderByInput } from "./ScrapeSourceOrderByInput";

@ArgsType()
class ScrapeSourceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ScrapeSourceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ScrapeSourceWhereInput, { nullable: true })
  @Type(() => ScrapeSourceWhereInput)
  where?: ScrapeSourceWhereInput;

  @ApiProperty({
    required: false,
    type: [ScrapeSourceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ScrapeSourceOrderByInput], { nullable: true })
  @Type(() => ScrapeSourceOrderByInput)
  orderBy?: Array<ScrapeSourceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ScrapeSourceFindManyArgs as ScrapeSourceFindManyArgs };
