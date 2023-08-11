import { Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angulartrain';

  pdfSrc: any;

  constructor(private sanitizer: DomSanitizer) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
    }
  }

  changePdf(){
    
  }
}
