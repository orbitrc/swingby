export type SColor =
  | 'black'
  | 'white'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'brown'
  | 'grey'
  | 'gray'
  | 'primary'
  | 'secondary'
  | 'accent';

const colorList: Array<SColor> = [
  'black',
  'white',
  'red',
  'orange',
  'yellow',
  'green',
  'mint',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink',
  'brown',
  'grey',
  'gray',
  'primary',
  'secondary',
  'accent',
];

export function isSColor(color: string): boolean {
  if (colorList.includes(color as SColor)) {
    return true;
  }

  return false;
}

export * from './configure'
