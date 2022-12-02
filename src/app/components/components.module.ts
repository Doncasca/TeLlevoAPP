import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { TabsconComponent } from './tabscon/tabscon.component';



@NgModule({
  declarations: [TabsComponent, TabsconComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[TabsComponent, TabsconComponent]
})
export class ComponentsModule { }
