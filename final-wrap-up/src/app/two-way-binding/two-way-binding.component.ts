import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  @Input() inputNames: string[];
  showName = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNames(): void{
    this.showName = true;
  }

}
