import { Page } from "./page.model";

export interface Tale {
  id: string;
  title: string;
  summary: string;
  age?: string | null;
  categories?: string[] | null;
  thumbnail_url: string;
  pages: Page[];
}
