import {User} from "../user/user";
import {GameSystem} from "./post-info/game-system/game-system";
import {GameType} from "./post-info/game-type/game-type";
import {Payment} from "./post-info/payment/payment";
import {Tag} from "./post-info/tag/tag";
import {Warning} from "./post-info/warning/warning";

export class Post {
  id: number;
  creator: User;
  gameSystem: GameSystem;
  gameType: GameType;
  tags: Tag[];
  warnings: Warning[];
  payment: Payment;
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
