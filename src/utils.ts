import { CELLS } from "./consts";
import { DEFAULT_MOVE_RANGE } from "./consts";

const isInRange = (cell: { x: number; y: number; }, playersCoordinates: { x: number; y: number; }, range: number) => {
    const diffX = Math.abs(playersCoordinates.x - cell.x);
    const diffY = Math.abs(playersCoordinates.y - cell.y);

    return diffX + diffY <= range ? true : false
  }


export const getCellsAvailableToMove = (playersCell: number): number[] => {
  const result: number[] = [];

  const playersCoordinates = {
    y: Math.ceil(playersCell / 10),
    x: playersCell % 10 === 0 ? 10 : playersCell % 10,
  };

  const filtered = CELLS.filter((cell) => isInRange(cell, playersCoordinates, DEFAULT_MOVE_RANGE));

  filtered.forEach((cell) => result.push((cell.y - 1) * 10 + cell.x))
  
  return result;
};
