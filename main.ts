export default {
  fetch: (request: Request) => {
    return new Response("Nothing here", {
      status: 307,
      headers: {
        Location: "https://github.com/janwilmake/forgithub.genignore",
      },
    });
  },
};
