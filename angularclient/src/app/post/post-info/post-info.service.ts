import {Injectable, OnInit} from '@angular/core';
import {GameSystemService} from "../game-system/game-system.service";
import {GameTypeService} from "../game-type/game-type.service";
import {PaymentService} from "../payment/payment.service";
import {TagService} from "../tag/tag.service";
import {WarningService} from "../warning/warning.service";
import {PostInfo} from "./post-info";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostInfoService implements OnInit {

  private postInfoSubject: BehaviorSubject<PostInfo> = new BehaviorSubject<PostInfo>(new PostInfo());

  constructor(private gameSystemService: GameSystemService,
              private gameTypeService: GameTypeService,
              private paymentService: PaymentService,
              private tagService: TagService,
              private warningService: WarningService) {
  }

  postInfo$(): Observable<PostInfo> {
    return this.postInfoSubject.asObservable();
  }

  ngOnInit(): void {
    this.loadPostInfo();
  }

  public loadPostInfo() {
    const postInfo: PostInfo = new PostInfo();
    this.loadGameSystems(postInfo);
    this.loadGameTypes(postInfo);
    this.loadPayments(postInfo);
    this.loadTags(postInfo);
    this.loadWarnings(postInfo);
    this.postInfoSubject.next(postInfo);
  }

  private loadGameSystems(postInfo: PostInfo): void {
    this.gameSystemService.findAll().subscribe(gameSystems => {
      postInfo.gameSystems = gameSystems;
    });
  }

  private loadGameTypes(postInfo: PostInfo): void {
    this.gameTypeService.findAll().subscribe(gameTypes => {
      postInfo.gameTypes = gameTypes;
    });
  }

  private loadPayments(postInfo: PostInfo): void {
    this.paymentService.findAll().subscribe(payments => {
      postInfo.payments = payments;
    });
  }

  private loadTags(postInfo: PostInfo): void {
    this.tagService.findAll().subscribe(tags => {
      postInfo.tags = tags;
    });
  }

  private loadWarnings(postInfo: PostInfo): void {
    this.warningService.findAll().subscribe(warnings => {
      postInfo.warnings = warnings;
    });
  }

}
