export const addTextStyle = (color?: string, size?: string) => {
  let classObject: Record<string, boolean> = {};
  if (color === 'dark') {
    classObject['text-black'] = true;
  }
  if (color === 'brand') {
    classObject['sky-text-gradient-color'] = true;
  }
  if (size === 'h2') {
    classObject['display'] = true;
  }

  return classObject;
}
