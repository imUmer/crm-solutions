import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-receipts',
  imports: [CommonModule],
  templateUrl: './receipts.component.html',
  styleUrl: './receipts.component.scss'
})

export class ReceiptsComponent {
  receipts = [
    { vendor: 'Amazon', date: '2024-11-25', amount: 125.50, category: 'Office Supplies', source: 'Email (Gmail)', status: 'Pending' },
    { vendor: 'Starbucks', date: '2024-11-24', amount: 30.00, category: 'Travel', source: 'Manual Upload', status: 'Processed' },
    { vendor: 'Uber', date: '2024-11-23', amount: 18.75, category: 'Transport', source: 'Bank Sync', status: 'Pending' },
    { vendor: 'Apple Store', date: '2024-11-22', amount: 899.99, category: 'Electronics', source: 'Manual Upload', status: 'Processed' },
    { vendor: 'Apple Store', date: '2024-11-22', amount: 899.99, category: 'Electronics', source: 'Manual Upload', status: 'Processed' },
    { vendor: 'Apple Store', date: '2024-11-22', amount: 899.99, category: 'Electronics', source: 'Manual Upload', status: 'Processed' },
    { vendor: 'Apple Store', date: '2024-11-22', amount: 899.99, category: 'Electronics', source: 'Manual Upload', status: 'Processed' },
    { vendor: 'Apple Store', date: '2024-11-22', amount: 899.99, category: 'Electronics', source: 'Manual Upload', status: 'Processed' },
    { vendor: 'Apple Store', date: '2024-11-22', amount: 899.99, category: 'Electronics', source: 'Manual Upload', status: 'Processed' },
    { vendor: 'Apple Store', date: '2024-11-22', amount: 899.99, category: 'Electronics', source: 'Manual Upload', status: 'Processed' },
  ];

  getStatusClass(status: string) {
    return {
      'bg-yellow-100 text-yellow-800': status === 'Pending',
      'bg-green-100 text-green-800': status === 'Processed',
      'bg-red-100 text-red-800': status === 'Rejected',
    };
  }
  getCategoryClass(status: string) {
    return {
      'bg-yellow-100 text-yellow-800': status === 'Travel',
      'bg-green-100 text-green-800': status === 'Office Supplies',
      'bg-red-100 text-red-800': status === 'Transport',
      'bg-blue-100 text-blue-800': status === 'Electronics',
    };
  }
}
