import { ChangeDetectionStrategy,Component,signal,effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatIconModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatTableModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = signal<number>(0)
  isActive:boolean = false
  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
  
   increment(){
    this.count.update(c => c + 1)
    this.isActive = !this.isActive
  }


  reset(){
    this.count.set(0)
  }


}
