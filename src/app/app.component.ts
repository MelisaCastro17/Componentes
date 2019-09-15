import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = ' ';
  favoriteSeason: string;
  seasons: string[] = [
    'Azul',
    'Gris',
    'Morado',
    'Verde',
    'Amarillo',
    'Negro',
    'Blanco',
    'Rojo'
  ];
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    
    }

    return value;
  }
  myControl = new FormControl();
      options: string[] = ['Pregrado', 'Potsgrado', 'Tecnico', 'Universitario','Especializacion'];
  constructor(private _ngZone: NgZone) { }

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  color = 'accent';
  checked = false;
  disabled = false;
}
