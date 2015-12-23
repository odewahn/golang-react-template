# Golang / React template

This is a super-slim starter kit for an app with a Golang backend and a React-based frontend.  To use it, you'll need:

* `npm` for package management
* A Golang dev environment
* [gin](https://github.com/codegangsta/negroni)

First, clone it down to your machine (duh!) and `cd` into your new directory.  Then:

```
npm install
npm run start
```

This will start a dev server with live reload so that you can edit your go code in the `backend` and your React code in `frontend`.  `gin` handles reload for Golang and `watchify` handles it for React.

View the app at `http://localhost:3000`.

Basically, the way this works is the Go code serves the contents of `backend\public` as a static site; `wachify` is set up to build a `bundle.js` file in this directory, as well, which is where all your React components are built.

You should then put your new components in `frontend\components` and your golang stuff in `backend`.
