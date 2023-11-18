import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly translateService: TranslateService) {}

  public ngOnInit(): void {
    this.setNavigatorLanguage()
  }

  private setNavigatorLanguage(): void {
    const language: string | undefined = this.translateService.getBrowserLang()
    this.translateService.use(language || 'es')
  }
}
