export class PostSearchFilters {
  creator: string;
  gameSystems: string[];
  gameTypes: string[];
  tags: string[];
  warnings: string[];
  payment: string;
  paymentMinValue: number;
  paymentMaxValue: number;
  title: string;
  content: string;
  isFullyBooked: boolean;
  creationMinDate: Date;
  creationMaxDate: Date;
  gameMinDate: Date;
  gameMaxDate: Date;
  place: string;
  minDuration: number;
  maxDuration: number;
  isOnline: boolean;
}
