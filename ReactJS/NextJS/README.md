### How deploy NextJS on Vercel

- push project to GitHub
- new project > import
- before change `http://localhost:3000/api/cars` to `process.env.NEXT_PUBLIC_API_URL + '/api/cars'`
- make deploy
- Now set this Environment Variables
  - Name: `NEXT_PUBLIC_API_URL`
  - Value: `https://random-vercel-url.vercel.app/`
- Make a redeploy
