import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ScrapingModukeService } from "./scrapingmoduke.service";

@swagger.ApiTags("scrapingModukes")
@common.Controller("scrapingModukes")
export class ScrapingModukeController {
  constructor(protected readonly service: ScrapingModukeService) {}

  @common.Post("/scrape-movies")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScrapeMovies(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ScrapeMovies(body);
      }
}
