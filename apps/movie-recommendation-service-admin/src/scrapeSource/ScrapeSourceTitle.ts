import { ScrapeSource as TScrapeSource } from "../api/scrapeSource/ScrapeSource";

export const SCRAPESOURCE_TITLE_FIELD = "name";

export const ScrapeSourceTitle = (record: TScrapeSource): string => {
  return record.name?.toString() || String(record.id);
};
