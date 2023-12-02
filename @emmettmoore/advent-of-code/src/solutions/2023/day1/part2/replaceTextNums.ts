export default (line: string[]): string[] => {
  const s = line.join('');
  return s
    .replaceAll('one', 'one1one')
    .replaceAll('two', 'two2two')
    .replaceAll('three', 'three3three')
    .replaceAll('four', 'four4four')
    .replaceAll('five', 'five5five')
    .replaceAll('six', 'six6six')
    .replaceAll('seven', 'seven7seven')
    .replaceAll('eight', 'eight8eight')
    .replaceAll('nine', 'nine9nine')
    .split('');
};
