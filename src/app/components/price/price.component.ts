import {Component, inject, input, TemplateRef} from '@angular/core';
import {SplitPricePipe} from '../../pipes/split-price.pipe';
import {CommonModule} from '@angular/common';
import {Info, Price} from '../../models/stack-entry';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { stripPTags } from '../../services/utilities';

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
  inline = input<boolean>(false);

  stripPTags = stripPTags;

  makeAriaLabel(param: (any)[]) {
    return param.join(' ');
  }

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'info-modal' });
	}
}
