import * as graphql from "@nestjs/graphql";
import { ScrapingModukeService } from "./scrapingmoduke.service";

export class ScrapingModukeResolver {
  constructor(protected readonly service: ScrapingModukeService) {}

  @graphql.Mutation(() => String)
  async ScrapeMovies(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ScrapeMovies(args);
  }
}
