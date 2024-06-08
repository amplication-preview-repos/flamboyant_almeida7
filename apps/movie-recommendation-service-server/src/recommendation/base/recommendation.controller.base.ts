/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RecommendationService } from "../recommendation.service";
import { RecommendationCreateInput } from "./RecommendationCreateInput";
import { Recommendation } from "./Recommendation";
import { RecommendationFindManyArgs } from "./RecommendationFindManyArgs";
import { RecommendationWhereUniqueInput } from "./RecommendationWhereUniqueInput";
import { RecommendationUpdateInput } from "./RecommendationUpdateInput";

export class RecommendationControllerBase {
  constructor(protected readonly service: RecommendationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recommendation })
  async createRecommendation(
    @common.Body() data: RecommendationCreateInput
  ): Promise<Recommendation> {
    return await this.service.createRecommendation({
      data: {
        ...data,

        movie: data.movie
          ? {
              connect: data.movie,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        movie: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Recommendation] })
  @ApiNestedQuery(RecommendationFindManyArgs)
  async recommendations(
    @common.Req() request: Request
  ): Promise<Recommendation[]> {
    const args = plainToClass(RecommendationFindManyArgs, request.query);
    return this.service.recommendations({
      ...args,
      select: {
        createdAt: true,
        id: true,

        movie: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recommendation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async recommendation(
    @common.Param() params: RecommendationWhereUniqueInput
  ): Promise<Recommendation | null> {
    const result = await this.service.recommendation({
      where: params,
      select: {
        createdAt: true,
        id: true,

        movie: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Recommendation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRecommendation(
    @common.Param() params: RecommendationWhereUniqueInput,
    @common.Body() data: RecommendationUpdateInput
  ): Promise<Recommendation | null> {
    try {
      return await this.service.updateRecommendation({
        where: params,
        data: {
          ...data,

          movie: data.movie
            ? {
                connect: data.movie,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          movie: {
            select: {
              id: true,
            },
          },

          timestamp: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Recommendation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRecommendation(
    @common.Param() params: RecommendationWhereUniqueInput
  ): Promise<Recommendation | null> {
    try {
      return await this.service.deleteRecommendation({
        where: params,
        select: {
          createdAt: true,
          id: true,

          movie: {
            select: {
              id: true,
            },
          },

          timestamp: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
