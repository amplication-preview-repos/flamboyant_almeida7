import { Module } from "@nestjs/common";
import { ScrapingModukeService } from "./scrapingmoduke.service";
import { ScrapingModukeController } from "./scrapingmoduke.controller";
import { ScrapingModukeResolver } from "./scrapingmoduke.resolver";

@Module({
  controllers: [ScrapingModukeController],
  providers: [ScrapingModukeService, ScrapingModukeResolver],
  exports: [ScrapingModukeService],
})
export class ScrapingModukeModule {}
