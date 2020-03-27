export const shortName = function (name) {
  const arrName = name.split(' ');
  const shortedName = `${arrName[0]} ${arrName[arrName.length-1]}`;

  return shortedName;
}