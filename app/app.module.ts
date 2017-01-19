import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { KegEditComponent } from './keg-edit.component';
import { NewKegComponent } from './new-keg.component';
import { EmptyKegComponent } from './empty-keg.component';
import { EmptyKegPipe } from './emptykeg.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, KegEditComponent, NewKegComponent, EmptyKegComponent, EmptyKegPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
