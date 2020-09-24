
export const getTimeFromDate = (date: string): string => {
  try {
    const dateTime = new Date(date);
    if (!dateTime) { throw new Error(`Invalid dateTime format provided: $dataTime`); }

    const hoursFormated = dateTime.getUTCHours() < 10 ? `0${dateTime.getUTCHours()}` : dateTime.getUTCHours();
    const minutesFormated = dateTime.getUTCMinutes() < 10 ? `0${dateTime.getUTCMinutes()}` : dateTime.getUTCMinutes();

    return`${hoursFormated}:${minutesFormated}`;
  } catch (e) {
    console.log(e);
  }

  return '';
};

export const getDateWithoutTime = (date: Date): Date => {
  date.setHours(0, 0, 0, 0);
  return date;
};
