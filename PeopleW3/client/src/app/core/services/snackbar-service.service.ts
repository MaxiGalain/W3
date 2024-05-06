import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarServiceService {

  constructor(private snackBar: MatSnackBar) { }

    showMessage(message: string, type: string, action: string = 'Close', duration: number = 3000): void {
      const panelClass = type === 'success' ? 'success' : 'error';
      this.snackBar.open(message, action, {
        duration: duration,
        horizontalPosition: 'right',
        panelClass: [panelClass]
      });
    }
}
