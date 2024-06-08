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
import { MovieService } from "../movie.service";
import { MovieCreateInput } from "./MovieCreateInput";
import { Movie } from "./Movie";
import { MovieFindManyArgs } from "./MovieFindManyArgs";
import { MovieWhereUniqueInput } from "./MovieWhereUniqueInput";
import { MovieUpdateInput } from "./MovieUpdateInput";
import { RecommendationFindManyArgs } from "../../recommendation/base/RecommendationFindManyArgs";
import { Recommendation } from "../../recommendation/base/Recommendation";
import { RecommendationWhereUniqueInput } from "../../recommendation/base/RecommendationWhereUniqueInput";

export class MovieControllerBase {
  constructor(protected readonly service: MovieService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Movie })
  async createMovie(@common.Body() data: MovieCreateInput): Promise<Movie> {
    return await this.service.createMovie({
      data: data,
      select: {
        createdAt: true,
        genre: true,
        id: true,
        name: true,
        rating: true,
        releaseDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Movie] })
  @ApiNestedQuery(MovieFindManyArgs)
  async movies(@common.Req() request: Request): Promise<Movie[]> {
    const args = plainToClass(MovieFindManyArgs, request.query);
    return this.service.movies({
      ...args,
      select: {
        createdAt: true,
        genre: true,
        id: true,
        name: true,
        rating: true,
        releaseDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async movie(
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Movie | null> {
    const result = await this.service.movie({
      where: params,
      select: {
        createdAt: true,
        genre: true,
        id: true,
        name: true,
        rating: true,
        releaseDate: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMovie(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() data: MovieUpdateInput
  ): Promise<Movie | null> {
    try {
      return await this.service.updateMovie({
        where: params,
        data: data,
        select: {
          createdAt: true,
          genre: true,
          id: true,
          name: true,
          rating: true,
          releaseDate: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMovie(
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Movie | null> {
    try {
      return await this.service.deleteMovie({
        where: params,
        select: {
          createdAt: true,
          genre: true,
          id: true,
          name: true,
          rating: true,
          releaseDate: true,
          updatedAt: true,
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

  @common.Get("/:id/recommendations")
  @ApiNestedQuery(RecommendationFindManyArgs)
  async findRecommendations(
    @common.Req() request: Request,
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Recommendation[]> {
    const query = plainToClass(RecommendationFindManyArgs, request.query);
    const results = await this.service.findRecommendations(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recommendations")
  async connectRecommendations(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        connect: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recommendations")
  async updateRecommendations(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        set: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recommendations")
  async disconnectRecommendations(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        disconnect: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }
}
