import {User} from "../user/user";
import {GameSystem} from "./game-system";
import {GameType} from "./game-type";
import {Payment} from "./payment";

export interface Post {
    id: number;
    creator: User;
    gameSystem: GameSystem;
    gameType: GameType;
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
