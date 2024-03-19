import {User} from "../user/user";
import {GameSystem} from "./game-system/game-system";
import {GameType} from "./game-type/game-type";
import {Payment} from "./payment/payment";
import {Tag} from "./tag/tag";
import {Warning} from "./warning/warning";

export class Post {
  id: number;
  creator: User;
  gameSystem: GameSystem;
  gameType: GameType;
  payment: Payment;
  tags: Tag[];
  warnings: Warning[];
  paymentValue: number;
  title: string;
  content: string;
  bookedPlayers: number;
  maxPlayers: number;
  creationDate: Date;
  gameDate: Date;
  place: string;
  duration: number;
  isOnline: boolean;
  isApproved: boolean;
}
