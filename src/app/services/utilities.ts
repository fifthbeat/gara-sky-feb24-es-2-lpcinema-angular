import { TextStyle } from "../models/stack-entry";

export const addTextStyle = (styles: TextStyle[]) => {

  let classObject: Record<string, boolean> = {};

  let style = styles[0];

  if (!style) return classObject

  switch (style.color) {
    case 'dark':
      classObject['sky-text-grey-color'] = true;
      break;
    case 'brand':
      classObject['sky-text-gradient-color'] = true;
      break;
  }

  switch (style.tag) {
    case 'h1':
      classObject['large-display'] = true;
      break;
    case 'h2':
      classObject['page-title'] = true;
      break;
    case 'h3':
    case 'h4':
      classObject['section-title'] = true;
      break;
    case 'h5':
      classObject['body-large'] = true;
      break;
  }


  switch (style.size) {
    case 'md':
      classObject['body-large'] = true;
      break;
  }

  return classObject;
}
