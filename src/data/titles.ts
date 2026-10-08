export type TitleType = "series" | "movie";

export type Title = {
  slug: string;
  name: string;
  type: TitleType;
  year: number;
  studio: string;
  genres: string[];
  /** Sample community average, 1–5 stars. */
  score: number;
  votes: number;
  /** Poster image in /public/posters. Titles without one show a colored tile. */
  poster?: string;
  /** Hue (0–360) for the fallback poster tile. */
  hue: number;
  summary: string;
};

export const titles: Title[] = [
  {
    slug: "spirited-away",
    name: "Spirited Away",
    type: "movie",
    year: 2001,
    studio: "Studio Ghibli",
    genres: ["Fantasy", "Adventure"],
    score: 4.8,
    votes: 18240,
    poster: "/posters/spirited-away.png",
    hue: 12,
    summary:
      "A young girl wanders into a world of spirits and must work in a bathhouse for the gods to free her parents and find her way home.",
  },
  {
    slug: "avatar-the-last-airbender",
    name: "Avatar: The Last Airbender",
    type: "series",
    year: 2005,
    studio: "Nickelodeon Animation Studio",
    genres: ["Adventure", "Fantasy"],
    score: 4.9,
    votes: 21510,
    poster: "/posters/avatar-the-last-airbender.jpg",
    hue: 200,
    summary:
      "Aang, the last airbender, wakes after a century frozen in ice and sets out to master all four elements and end a long war.",
  },
  {
    slug: "arcane",
    name: "Arcane",
    type: "series",
    year: 2021,
    studio: "Fortiche",
    genres: ["Action", "Drama"],
    score: 4.8,
    votes: 15420,
    hue: 280,
    summary:
      "Two sisters end up on opposite sides of a conflict between the wealthy city of Piltover and the undercity of Zaun.",
  },
  {
    slug: "into-the-spider-verse",
    name: "Spider-Man: Into the Spider-Verse",
    type: "movie",
    year: 2018,
    studio: "Sony Pictures Animation",
    genres: ["Action", "Comedy"],
    score: 4.7,
    votes: 16870,
    poster: "/posters/into-the-spider-verse.png",
    hue: 350,
    summary:
      "Brooklyn teen Miles Morales becomes Spider-Man and teams up with Spider-People from other dimensions to save every reality.",
  },
  {
    slug: "fullmetal-alchemist-brotherhood",
    name: "Fullmetal Alchemist: Brotherhood",
    type: "series",
    year: 2009,
    studio: "Bones",
    genres: ["Action", "Fantasy"],
    score: 4.9,
    votes: 19980,
    poster: "/posters/fullmetal-alchemist-brotherhood.png",
    hue: 30,
    summary:
      "Brothers Edward and Alphonse Elric search for the Philosopher's Stone to restore the bodies they lost to forbidden alchemy.",
  },
  {
    slug: "your-name",
    name: "Your Name",
    type: "movie",
    year: 2016,
    studio: "CoMix Wave Films",
    genres: ["Romance", "Drama"],
    score: 4.7,
    votes: 13350,
    poster: "/posters/your-name.png",
    hue: 220,
    summary:
      "A city boy and a country girl who have never met begin to swap bodies, and set out to find each other.",
  },
  {
    slug: "bojack-horseman",
    name: "BoJack Horseman",
    type: "series",
    year: 2014,
    studio: "ShadowMachine",
    genres: ["Comedy", "Drama"],
    score: 4.6,
    votes: 11200,
    poster: "/posters/bojack-horseman.png",
    hue: 260,
    summary:
      "A washed-up sitcom star who happens to be a horse tries to make a comeback while facing up to the damage he's done.",
  },
  {
    slug: "coco",
    name: "Coco",
    type: "movie",
    year: 2017,
    studio: "Pixar",
    genres: ["Family", "Music"],
    score: 4.6,
    votes: 14760,
    poster: "/posters/coco.jpg",
    hue: 330,
    summary:
      "A boy who dreams of being a musician is transported to the Land of the Dead and uncovers his family's history.",
  },
  {
    slug: "gravity-falls",
    name: "Gravity Falls",
    type: "series",
    year: 2012,
    studio: "Disney Television Animation",
    genres: ["Mystery", "Comedy"],
    score: 4.7,
    votes: 12890,
    poster: "/posters/gravity-falls.png",
    hue: 140,
    summary:
      "Twins Dipper and Mabel spend the summer with their great-uncle in an Oregon town full of strange mysteries.",
  },
  {
    slug: "princess-mononoke",
    name: "Princess Mononoke",
    type: "movie",
    year: 1997,
    studio: "Studio Ghibli",
    genres: ["Fantasy", "Action"],
    score: 4.7,
    votes: 12100,
    poster: "/posters/princess-mononoke.png",
    hue: 100,
    summary:
      "A cursed prince is drawn into a fight between the gods of the forest and a mining town that is consuming it.",
  },
  {
    slug: "cowboy-bebop",
    name: "Cowboy Bebop",
    type: "series",
    year: 1998,
    studio: "Sunrise",
    genres: ["Sci-Fi", "Action"],
    score: 4.7,
    votes: 10930,
    poster: "/posters/cowboy-bebop.jpg",
    hue: 45,
    summary:
      "A crew of bounty hunters drifts through the solar system aboard the Bebop, chasing jobs and running from their pasts.",
  },
  {
    slug: "wall-e",
    name: "WALL·E",
    type: "movie",
    year: 2008,
    studio: "Pixar",
    genres: ["Sci-Fi", "Family"],
    score: 4.6,
    votes: 15020,
    poster: "/posters/wall-e.jpg",
    hue: 50,
    summary:
      "A lonely trash-compacting robot left on an abandoned Earth falls for a sleek probe robot and follows her into space.",
  },
  {
    slug: "attack-on-titan",
    name: "Attack on Titan",
    type: "series",
    year: 2013,
    studio: "Wit Studio / MAPPA",
    genres: ["Action", "Drama"],
    score: 4.7,
    votes: 17640,
    hue: 0,
    summary:
      "Humanity lives behind huge walls to hide from man-eating Titans, until the day the walls are breached.",
  },
  {
    slug: "klaus",
    name: "Klaus",
    type: "movie",
    year: 2019,
    studio: "SPA Studios",
    genres: ["Family", "Comedy"],
    score: 4.5,
    votes: 8420,
    poster: "/posters/klaus.jpg",
    hue: 190,
    summary:
      "A spoiled postman sent to a frozen island town befriends a reclusive toymaker, and the two start a holiday legend.",
  },
  {
    slug: "bluey",
    name: "Bluey",
    type: "series",
    year: 2018,
    studio: "Ludo Studio",
    genres: ["Family", "Comedy"],
    score: 4.8,
    votes: 9310,
    poster: "/posters/bluey.jpg",
    hue: 210,
    summary:
      "Bluey, a six-year-old Blue Heeler pup, turns everyday family life into big imaginative games.",
  },
  {
    slug: "the-iron-giant",
    name: "The Iron Giant",
    type: "movie",
    year: 1999,
    studio: "Warner Bros. Feature Animation",
    genres: ["Sci-Fi", "Family"],
    score: 4.6,
    votes: 9870,
    poster: "/posters/the-iron-giant.jpg",
    hue: 160,
    summary:
      "In 1957, a boy befriends a giant robot from outer space while a government agent hunts it down.",
  },
];

export function getTitle(slug: string) {
  return titles.find((t) => t.slug === slug);
}
