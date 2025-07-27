import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent {
  @Input() title: string = 'Dialog Title';
  @Input() message: string = 'Are you sure you want to continue?';
  @Input() show: boolean = false;

  @Output() close = new EventEmitter<boolean>();

  onClose(result: boolean) {
    this.close.emit(result);
    this.show = false;
  }
}
