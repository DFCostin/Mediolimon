import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'Mediolimon';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.addLangs(['vlc', 'es']);
    const lang = this.translate.getBrowserLang();
   
    if (lang !== 'vlc' && lang !== 'es') {
      this.translate.setDefaultLang('es');
    } else {
      this.translate.use(lang);
    }
  }

 
}

