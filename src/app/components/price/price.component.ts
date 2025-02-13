import {Component, inject, input, Input, TemplateRef} from '@angular/core';
import {SplitPricePipe} from '../../pipe/split-price.pipe';
import {CommonModule} from '@angular/common';
import {Hero, Info, Price} from '../../models/stack-entry';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-price',
  imports: [
    CommonModule,
    SplitPricePipe
  ],
  standalone: true,
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

	private modalService = inject(NgbModal);
  price = input.required<Price>();
  info = input<Info>();

  constructor() {
  }

  makeAriaLabel(param: (any)[]) {
    return param.join(' ');
  }

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'info-modal' });
	}
}
