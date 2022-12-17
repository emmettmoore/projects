import getData from '../getData';
export default async (): Promise<string> => {
  const data = getData();

  data.forEach((d) => {
    console.log(d);
  });

  return ``;
};
