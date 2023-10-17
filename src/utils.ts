import { CELLS } from "./consts";

const isInRange = (
  cell: { x: number; y: number },
  playersCoordinates: { x: number; y: number },
  range: number
) => {
  const diffX = Math.abs(playersCoordinates.x - cell.x);
  const diffY = Math.abs(playersCoordinates.y - cell.y);

  return diffX + diffY <= range ? true : false;
};

export const getRange = (prevPosition: number, newPosition: number) => {
  const prevPositionCoordinates = {
    y: Math.ceil(prevPosition / 10),
    x: prevPosition % 10 === 0 ? 10 : prevPosition % 10,
  };

  const newPositionCoordinates = {
    y: Math.ceil(newPosition / 10),
    x: newPosition % 10 === 0 ? 10 : newPosition % 10,
  }

  const diffX = Math.abs(prevPositionCoordinates.x - newPositionCoordinates.x);
  const diffY = Math.abs(prevPositionCoordinates.y - newPositionCoordinates.y);

  return (diffX + diffY)
};

export const getCellsAvailableToMove = (
  playersCell: number,
  range: number
): number[] => {
  const result: number[] = [];

  const playersCoordinates = {
    y: Math.ceil(playersCell / 10),
    x: playersCell % 10 === 0 ? 10 : playersCell % 10,
  };

  const filtered = CELLS.filter((cell) =>
    isInRange(cell, playersCoordinates, range)
  );

  filtered.forEach((cell) => result.push((cell.y - 1) * 10 + cell.x));

  return result;
};
