import { Module } from "@nestjs/common";
import { ScrapeSourceModuleBase } from "./base/scrapeSource.module.base";
import { ScrapeSourceService } from "./scrapeSource.service";
import { ScrapeSourceController } from "./scrapeSource.controller";
import { ScrapeSourceResolver } from "./scrapeSource.resolver";

@Module({
  imports: [ScrapeSourceModuleBase],
  controllers: [ScrapeSourceController],
  providers: [ScrapeSourceService, ScrapeSourceResolver],
  exports: [ScrapeSourceService],
})
export class ScrapeSourceModule {}
