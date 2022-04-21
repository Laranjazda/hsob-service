import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { PhotoComponent } from './photo/photo.component';



@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        MatCardModule,
    ],
    exports: [
        PhotoComponent
    ]

})
export class PhotosModule { }
