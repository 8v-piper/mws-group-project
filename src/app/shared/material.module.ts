import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatRippleModule,
    MatDividerModule,
    MatChipsModule,
    MatBadgeModule,
  ]
})
export class MaterialModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ){
    // ...
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/twitter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/linkedin.svg")
    );
    this.matIconRegistry.addSvgIcon(
      'web',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/web.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'khan',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/khan.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'coursera',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/coursera.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'udacity',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/udacity.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'freecode',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/freecodecamp.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'udemy',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/udemy.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'scrimba',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/scrimba.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'gwgoogle',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/gwgoogle.svg")
    );

    this.matIconRegistry.addSvgIcon(
      'edx',
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/logos/edx.svg")
    );
  }
}
