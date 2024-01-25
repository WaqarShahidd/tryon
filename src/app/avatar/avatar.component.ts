import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent implements OnInit {
  constructor() {}

  stream: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: String = '';

  ngOnInit(): void {
    this.checkPermission();
  }

  get triggerObservable() {
    return this.trigger.asObservable();
  }

  handleImage = (event: WebcamImage) => {
    console.info('received webcam image', WebcamImage);
    this.previewImage = event.imageAsDataUrl;
  };

  triggerSnapshot() {
    this.trigger.next();
  }

  checkPermission() {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 720, height: 1280 },
      })
      .then((stream) => {
        console.log(stream);
        // this.stream = stream;
      })
      .catch((err) => {
        console.log(err);
        this.stream = err;
      });
  }
}
