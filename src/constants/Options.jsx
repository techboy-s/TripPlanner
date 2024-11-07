import { CircleDollarSign, Home, Milk } from "lucide-react";

export const SelectTravelsList = [
  {
    id: 1,
    title: "Just me",
    desc: "A solo traveler in exploration",
    icon: <Milk />, // Choose an appropriate icon here
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: <Milk />,
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun-loving adventurers",
    icon: <Home />,
    people: "3 to 5 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: <CircleDollarSign />,
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: <CircleDollarSign />,
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Keep cost on the high side",
    icon: <CircleDollarSign />,
  },
];

export const AI_PROMPT = "Generate Travel Plan for Location: {location}";
