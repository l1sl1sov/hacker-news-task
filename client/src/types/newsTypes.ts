import { FILTER_OPTIONS } from '../constants/filters';

export type filterType = (typeof FILTER_OPTIONS)[number]; //i use filters const to aviod duplication and centralize filters

export type FeedFilterType = 'top' | 'new' | 'best';

export interface NewItemI {
  id: number;
  type: 'story' | 'comment' | 'poll' | 'pollopt';
  by: string;
  time: number;
  text?: string;
  url?: string;
  score?: number;
  title?: string;
  descendants?: number;
  kids?: number[];
  deleted?: boolean;
  dead?: boolean;
}
