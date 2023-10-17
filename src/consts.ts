export const CELLS_COUNT = 100;

const getCells = () => {
  const result = [];

  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      const obj = {
        y: i,
        x: j,
      };
      result.push(obj);
    }
  }

  return result
};

export const CELLS = getCells();

export const DEFAULT_MOVE_RANGE = 6;
