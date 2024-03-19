import {GameSystem} from "../game-system/game-system";
import {GameType} from "../game-type/game-type";
import {Payment} from "../payment/payment";
import {Tag} from "../tag/tag";
import {Warning} from "../warning/warning";

export class PostInfo {
  gameSystems: GameSystem[] = [];
  gameTypes: GameType[] = [];
  payments: Payment[] = [];
  tags: Tag[] = [];
  warnings: Warning[] = [];
}
