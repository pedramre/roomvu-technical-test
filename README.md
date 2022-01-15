This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Information about RoomVu Technical Test
Recreate Dan Abramov’s personal weblog using Next.js. The weblog is available at [https://overreacted.io](https://overreacted.io)

#### Scope
You should implement two pages:
1. Home page: should be exactly like the original Website.
2. Post page: should simply show the title, publication date, and the body. No footer or
previous/next link is required.
3. You should add a toggle switch to change the theme of the website (dark/light). Just like
the original page. The status of this switch must be stored and retrieved using Redux.
#### Tools
● Get the posts from https://jsonplaceholder.typicode.com/posts <br>
● For the date of the posts, assign a date based on the id of the post you receive from the
api. Posts should be sorted by date starting from the most recent post.
#### Output
● You should send us a git repo (gitlab or github). <br>
● The repo should be self-contained. You should add a readme file with instructions to run
your project.

## Getting Started
First clone or download from git repository
[https://github.com/pedramre/roomvu-technical-test.git](https://github.com/pedramre/roomvu-technical-test.git)

Second install dependencies with

```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
