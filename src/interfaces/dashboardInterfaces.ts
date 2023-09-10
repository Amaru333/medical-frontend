import { ReactNode } from "react";

export interface IEventData {
  id: string;
  title: string;
  description: string;
  start_time: Date | string;
  end_time: Date | string;
  links: string[];
  color: string;
}

export interface ISortedResults {
  date: Date | string;
  data: IEventData[];
}

export interface IDateSectionProps {
  data: ISortedResults;
}

export interface IEventCardProps {
  data: IEventData;
}
export interface ITimelines {
  name: string;
  value: string;
}

export interface ITimelineSelectorProps {
  selectedTimeline: ITimelines;
  setSelectedTimeline: (selectedTimeline: ITimelines) => void;
  timelines: ITimelines[];
}

export interface IOutsideListenerProps {
  func: () => void;
  children: ReactNode;
}

export interface IDateCardProps {
  timestamp: Date | string;
}
