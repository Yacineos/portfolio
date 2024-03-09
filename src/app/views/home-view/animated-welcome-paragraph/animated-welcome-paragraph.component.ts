import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-animated-welcome-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './animated-welcome-paragraph.component.html',
  styleUrl: './animated-welcome-paragraph.component.css'
})
export class AnimatedWelcomeParagraphComponent {
  bonjourText: string = "BONJOUR";
  yacineText: string = "C'EST YACINE";
  shuffleParagraph(){

  }
}
