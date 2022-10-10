import { Card } from "./card";
import { Category } from "./category";
import { DeckCard } from "./deckcard";
import { Format } from "./format";

export interface Deck {

  id: number;
  name: string;
  description: string;
  format: Format;
  chef: string;
  categories: Category[];
  cards: DeckCard[];
  onTheMenu: boolean;
  coverImage: string;
  power: number;
  difficulty: number;

}
