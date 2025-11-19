export interface HourlyMessage {
  hour: number;
  text: string;
  img: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
}

export interface Config {
  relationshipStartDate: string;
  heroPrimaryText: string;
  heroSecondaryText: string;
  specialMessage: string;
}

