import * as graphql from "@nestjs/graphql";
import { ScrapeSourceResolverBase } from "./base/scrapeSource.resolver.base";
import { ScrapeSource } from "./base/ScrapeSource";
import { ScrapeSourceService } from "./scrapeSource.service";

@graphql.Resolver(() => ScrapeSource)
export class ScrapeSourceResolver extends ScrapeSourceResolverBase {
  constructor(protected readonly service: ScrapeSourceService) {
    super(service);
  }
}
