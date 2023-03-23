export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRange = (length: number) => {
  const arr: number[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }
  return arr;
};

export const getNowTime = (currentTime: Date) => {
  const currentOffset = currentTime.getTimezoneOffset();
  const ISTOffset = 330; // IST offset UTC +5:30
  const ISTTime = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000
  );

  const [year, mm, dd] = currentTime.toISOString().split("T")[0].split("-");
  const onlyDate = `${dd}-${mm}-${year}`;

  const hoursIST = ISTTime.getHours();
  const minutesIST =
    Number(ISTTime.getMinutes()) < 10
      ? "0" + ISTTime.getMinutes()
      : ISTTime.getMinutes();
  const onlyTime = hoursIST + ":" + minutesIST;

  return `${onlyDate} at ${onlyTime}`;
};
