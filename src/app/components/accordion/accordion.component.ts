import { Component, input } from '@angular/core';
import { AccordionGroup } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, NgbAccordionModule],
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  data = input.required<AccordionGroup>();
}
