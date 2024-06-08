import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrapeSourceServiceBase } from "./base/scrapeSource.service.base";

@Injectable()
export class ScrapeSourceService extends ScrapeSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
