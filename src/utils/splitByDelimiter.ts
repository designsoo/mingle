const DELIMITER = '&iquest';

export const splitByDelimiter = (inputName: string) => {
  const [name, password] = inputName.split(DELIMITER);

  return {
    name,
    password,
  };
};
