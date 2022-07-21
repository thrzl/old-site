# how i built this 🔨

### stack 💻

- sveltekit
- tailwind
  that's basically it, i wanted this website to be super simple, so here it is!

### apis used 🧪

- [last.fm](https://www.last.fm/api)
- [pinned](https://github.com/terabyte3/pinned)

to protect keys, i used a [sveltekit endpoint] to guard my keys. this publicly exposes my top artists and tracks data, while hiding my api key and the actual request made.

> by the way, i don't use the greatest method of fetching lastapi data. i'm trying to figure out how to cache it, but i'm struggling a bit... if you know how to do this, make an issue or pr :)

if you have any more questions that you want me to talk about here, submit an issue and i'll gladly go over it!
