export interface Turn {
  value: number;
}

export interface player {
  id: string;
  turn: Turn;
}

export abstract class baseGame {
  name: string;
}
