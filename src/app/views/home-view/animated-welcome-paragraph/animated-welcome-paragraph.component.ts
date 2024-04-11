import { ChangeDetectionStrategy, Component, Input, OnInit, Signal, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-animated-welcome-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './animated-welcome-paragraph.component.html',
  styleUrl: './animated-welcome-paragraph.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimatedWelcomeParagraphComponent {
  
  private readonly _sigBonjourText = signal<string>("BONJOUR");
  readonly sigBonjourText = computed<string>(() => this._sigBonjourText());
  private readonly _sigYacineText = signal<string>("C'EST YACINE");
  readonly sigYacineText = computed<string>(() => this._sigYacineText() );

  shuffleInProgress: boolean = false ;


  ngAfterViewInit(): void{
    this.shuffleParagraph();
  }

    shuffleParagraph(){
    if(this.shuffleInProgress) return ;

    this.shuffleInProgress = true ;

    const letters = Array.from("AZERTYUIOPQSDFGHJKLMWXCVBN");
    const initArrBonjourText = Array.from(this.sigBonjourText());
    const initArryacineText = Array.from(this.sigYacineText());
    let arrBonjourText = Array.from(this.sigBonjourText());
    let arrYacineText = Array.from(this._sigYacineText());

    let numberOfShuffleOnEachHover = 0 ;
    
    const interval = setInterval(() => {
      

      arrBonjourText = initArrBonjourText.map((letter, index) => {
        if(index < numberOfShuffleOnEachHover){
          return letter ;
        }

        const randonIndex = Math.floor(Math.random()*25) ;
        return letters[randonIndex];
      });
      
      arrYacineText = initArryacineText.map((letter, index) => {
        if(index < Math.ceil(numberOfShuffleOnEachHover) +5){
          return letter ;
        }

        const randonIndex = Math.floor(Math.random()*25) ;
        return letters[randonIndex];
      });
  
      this._sigBonjourText.set(arrBonjourText.join(''));
      this._sigYacineText.set(arrYacineText.join(''))
      
      numberOfShuffleOnEachHover += 1/4;


      if(numberOfShuffleOnEachHover > arrBonjourText.length ){
        clearInterval(interval);
        this.shuffleInProgress = false ;
      }
       

    }, 30);

  }
 
}


