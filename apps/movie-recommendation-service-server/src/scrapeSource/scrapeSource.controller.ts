import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScrapeSourceService } from "./scrapeSource.service";
import { ScrapeSourceControllerBase } from "./base/scrapeSource.controller.base";

@swagger.ApiTags("scrapeSources")
@common.Controller("scrapeSources")
export class ScrapeSourceController extends ScrapeSourceControllerBase {
  constructor(protected readonly service: ScrapeSourceService) {
    super(service);
  }
}
