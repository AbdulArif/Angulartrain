import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angulartrain';

  pdfSrc: any;
  viewer!: any;

  constructor(private sanitizer: DomSanitizer) { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.changePdfColor()
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
    }
  }

  changePdfColor() {
    const el: HTMLElement | null = typeof this.viewer !== 'undefined' ? (this.viewer as HTMLElement) : document.body;
    if (el) {
      el.style.filter = 'grayscale(100%) brightness(100%) invert(1%) saturate(100%) contrast(100%)';
      console.log("style...........")
    }
  }
}
