import { IEventData, ISortedResults } from "@/interfaces/dashboardInterfaces";
import moment from "moment";

export const sortAndGroupByDate = (data: IEventData[]) => {
  const groupedEventsMap = data.reduce<Record<string, IEventData[]>>((result, event) => {
    const eventDate = moment(event.start_time).startOf("day").toISOString();
    if (result[eventDate]) {
      result[eventDate].push(event);
    } else {
      result[eventDate] = [event];
    }
    return result;
  }, {});
  const sortedAndGroupedResult: ISortedResults[] = Object.entries(groupedEventsMap).map(([date, events]) => ({
    date: date,
    data: events,
  }));
  return sortedAndGroupedResult;
};

export const getDateByString = (inputDate: Date | string): string => {
  const currentDate = moment();
  const targetDate = moment(inputDate);

  if (targetDate.isSame(currentDate, "day")) {
    return "Today";
  } else if (targetDate.isSame(currentDate.clone().add(1, "day"), "day")) {
    return "Tomorrow";
  } else {
    return targetDate.format("MMM D, YYYY");
  }
};

export const convertTimestampToTime = (inputTimestamp: Date | string): string => {
  const formattedTime = moment(inputTimestamp).format("HH:mm");
  return formattedTime;
};

export const getRandomDarkColor = (): string => {
  const colors = ["#fbf0cd", "#fee3d0", "#d2f4df", "#eeddfe", "#fee3d0", "#d7e6fd"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const getNumberOfHours = (startTime: Date | string, endTime: Date | string) => {
  return moment(endTime).diff(moment(startTime), "hours", true);
};

export const getHoursAsDecimal = (timestamp: Date | string) => {
  const timeMoment = moment(timestamp);
  const hours = timeMoment.hour();
  const minutes = timeMoment.minute();
  return hours + minutes / 60;
};

export const getOverlappingCardIndex = (data: IEventData[], index: number, rangeMinutes: number) => {
  console.log(data, "DATA");
  const currentStartTime = new Date(data?.[index]?.start_time).getTime();
  let count = 0;

  for (let i = index - 1; i >= 0; i--) {
    const previousStartTime = new Date(data[i]?.start_time).getTime();

    if (currentStartTime - previousStartTime <= rangeMinutes * 60 * 1000) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

export const formatDuration = (start: string | Date, end: string | Date): string => {
  const startTime = moment(start);
  const endTime = moment(end);

  const duration = moment.duration(endTime.diff(startTime));

  const hours = duration.hours();
  const minutes = duration.minutes();

  let durationString = "";

  if (hours > 0) {
    durationString += `${hours} ${hours === 1 ? "hour" : "hours"}`;
  }

  if (minutes > 0) {
    if (durationString !== "") {
      durationString += " ";
    }
    durationString += `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  }

  if (durationString === "") {
    durationString = "0 minutes";
  }

  return durationString;
};

export const formatTimeDifference = (start: string | Date, end: string | Date): string => {
  const currentTime = moment();
  const startTime = moment(start);
  const endTime = moment(end);

  if (startTime.diff(currentTime, "hours") >= 24) {
    const duration = moment.duration(startTime.diff(currentTime));
    const days = duration.days();
    return `Starts in ${days} day${days > 1 ? "s" : ""}`;
  } else if (currentTime.isBefore(startTime)) {
    const duration = moment.duration(startTime.diff(currentTime));
    const hours = duration.hours();
    const minutes = duration.minutes();
    return `Starts in ${hours} hr ${minutes} mins`;
  } else if (currentTime.isBetween(startTime, endTime)) {
    return "Live";
  } else {
    return "Ended";
  }
};

export const getDateAndDay = (timestamp: Date | string) => {
  const date = moment(timestamp).date();
  const day = moment(timestamp).format("ddd");

  return { date, day };
};

export const getFilteredRowEventData = (currentTimestamp: Date | string, sortedData: ISortedResults[]) => {
  const dateFormat = moment(currentTimestamp).format("YYYY-MM-DD");
  const filteredIteration = sortedData?.filter((rawData) => moment.utc(rawData.date).local().format("YYYY-MM-DD") == dateFormat)[0];
  return filteredIteration;
};
