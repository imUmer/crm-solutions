import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messagebox',
  imports: [CommonModule],
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.scss'
})
export class MessageboxComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' = 'info';

  closeMessage() {
    this.message = '';
  }
}
