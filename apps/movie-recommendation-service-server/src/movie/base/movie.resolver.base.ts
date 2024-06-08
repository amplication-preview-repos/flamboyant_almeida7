/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Movie } from "./Movie";
import { MovieCountArgs } from "./MovieCountArgs";
import { MovieFindManyArgs } from "./MovieFindManyArgs";
import { MovieFindUniqueArgs } from "./MovieFindUniqueArgs";
import { CreateMovieArgs } from "./CreateMovieArgs";
import { UpdateMovieArgs } from "./UpdateMovieArgs";
import { DeleteMovieArgs } from "./DeleteMovieArgs";
import { RecommendationFindManyArgs } from "../../recommendation/base/RecommendationFindManyArgs";
import { Recommendation } from "../../recommendation/base/Recommendation";
import { MovieService } from "../movie.service";
@graphql.Resolver(() => Movie)
export class MovieResolverBase {
  constructor(protected readonly service: MovieService) {}

  async _moviesMeta(
    @graphql.Args() args: MovieCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Movie])
  async movies(@graphql.Args() args: MovieFindManyArgs): Promise<Movie[]> {
    return this.service.movies(args);
  }

  @graphql.Query(() => Movie, { nullable: true })
  async movie(
    @graphql.Args() args: MovieFindUniqueArgs
  ): Promise<Movie | null> {
    const result = await this.service.movie(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Movie)
  async createMovie(@graphql.Args() args: CreateMovieArgs): Promise<Movie> {
    return await this.service.createMovie({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Movie)
  async updateMovie(
    @graphql.Args() args: UpdateMovieArgs
  ): Promise<Movie | null> {
    try {
      return await this.service.updateMovie({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Movie)
  async deleteMovie(
    @graphql.Args() args: DeleteMovieArgs
  ): Promise<Movie | null> {
    try {
      return await this.service.deleteMovie(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Recommendation], { name: "recommendations" })
  async findRecommendations(
    @graphql.Parent() parent: Movie,
    @graphql.Args() args: RecommendationFindManyArgs
  ): Promise<Recommendation[]> {
    const results = await this.service.findRecommendations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
