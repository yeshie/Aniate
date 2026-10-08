# Aniate

A minimal website for rating animated TV series and movies.

- **Browse**: search by title, studio or genre, filter series and movies, and sort by rating, year or name.
- **Title pages**: details, the community score, and a 1–5 star rating of your own.
- **My ratings**: everything you've rated, with your average.

Built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- Titles live in `src/data/titles.ts`. Add an entry there to add a show or movie.
- Posters are low-resolution images from each title's Wikipedia page, stored in `public/posters/`. Arcane and Attack on Titan have no poster there, so they show a colored tile.
- Community scores and vote counts are sample data.
- Your ratings are stored in the browser (`localStorage`), so there's no account or backend yet.
