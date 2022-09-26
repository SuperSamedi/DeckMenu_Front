import { Category } from "./category";
import { Format } from "./format";

export interface Deck {

  id: number;
  name: string;
  description: string;
  format: Format;
  categories: Category[];

}
