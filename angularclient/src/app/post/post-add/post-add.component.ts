import {Component, OnInit} from '@angular/core';
import {GameSystemService} from "../game-system/game-system.service";
import {GameSystem} from "../game-system/game-system";
import {GameTypeService} from "../game-type/game-type.service";
import {PaymentService} from "../payment/payment.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../post";
import {PostService} from "../post.service";
import {GameType} from "../game-type/game-type";
import {Payment} from "../payment/payment";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html'
})
export class PostAddComponent implements OnInit {

  postForm: FormGroup;

  gameSystems: GameSystem[] = [];
  gameTypes: GameType[] = [];
  payments: Payment[] = [];

  constructor(private gameSystemService: GameSystemService,
              private gameTypeService: GameTypeService,
              private paymentService: PaymentService,
              private postService: PostService) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      gameSystem: new FormControl(null, Validators.required),
      gameType: new FormControl(null, Validators.required),
      payment: new FormControl(null, Validators.required),
      paymentValue: new FormControl(0),
      place: new FormControl('', Validators.required),
      duration: new FormControl(0, Validators.required),
      isOnline: new FormControl(false),
      isApproved: new FormControl(false),
      bookedPlayers: new FormControl(0),
      maxPlayers: new FormControl(0, Validators.required),
      creationDate: new FormControl(new Date()),
      gameDate: new FormControl(new Date(), Validators.required)
    });
  }

  ngOnInit(): void {
    this.loadGameSystems();
    this.loadGameTypes();
    this.loadPayments();
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const post: Post = this.postForm.value;
      this.postService.save(post).subscribe();
    }
  }

  loadGameSystems(): void {
    this.gameSystemService.findAll().subscribe(gameSystems => {
      this.gameSystems = gameSystems;
    });
  }

  loadGameTypes(): void {
    this.gameTypeService.findAll().subscribe(gameTypes => {
      this.gameTypes = gameTypes;
    });
  }

  loadPayments(): void {
    this.paymentService.findAll().subscribe(payments => {
      this.payments = payments;
    });
  }

}
