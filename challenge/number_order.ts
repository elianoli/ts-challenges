export function descendingOrder(n: number): number {
    let n_array: number[] = (""+n).split('').map(Number);
    n_array = n_array.sort().reverse();
    const n_reversed = Number(n_array.join(''));
    return n_reversed;
  }