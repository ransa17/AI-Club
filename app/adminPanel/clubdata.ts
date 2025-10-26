// app/data/clubData.ts
export interface Member {
  name: string;
  role: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Event {
  title: string;
  date: string;
  location: string;
}

export let membersData: Member[] = [
  { name: "Aarav Patel", role: "President" },
  { name: "Lena Kim", role: "Research Lead" },
];

export let projectsData: Project[] = [
  { title: "AI Chatbot", description: "Building a conversational bot for our campus website." },
  { title: "Vision Lab", description: "Training a model to classify local plant species." },
];

export let eventsData: Event[] = [
  { title: "AI Bootcamp", date: "2025-11-05", location: "Main Auditorium" },
  { title: "Research Meetup", date: "2025-12-10", location: "Lab 204" },
];
