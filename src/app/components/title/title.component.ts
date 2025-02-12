import { Component, input } from '@angular/core';
import { HeadingEditorial } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';
import { addTextStyle } from '../../services/utilities';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  data = input.required<HeadingEditorial>();

  addTextStyle = addTextStyle;

}
