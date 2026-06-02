import { FILTER_OPTIONS } from '../constants/filters';

export type filterType = (typeof FILTER_OPTIONS)[number]; //i use filters const to aviod duplication and centralize filters
