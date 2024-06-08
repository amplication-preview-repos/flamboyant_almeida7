import { Injectable } from "@nestjs/common";

@Injectable()
export class ScrapingModukeService {
  constructor() {}
  async ScrapeMovies(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
