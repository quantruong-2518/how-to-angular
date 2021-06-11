export enum KittyColors {
  White = 'white',
  Black = 'black',
}

export interface IKitty {
  cover?: string;
  name?: string;
  color?: KittyColors;
}
