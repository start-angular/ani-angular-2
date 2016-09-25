import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BSComponentComponent } from './bsComponent.component';

@NgModule({
    imports: [FormsModule],
    declarations: [BSComponentComponent],
    exports: [BSComponentComponent]
})

export class BSComponentModule { }
