import { rest } from "msw";

export const handlers = [
  rest.post("https://dummyjson.com/auth/login", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Manish 0",
        },
        {
          name: "Manish 1",
        },
        {
          name: "Manish 2",
        },
        {
          name: "Manish 3",
        },
      ])
    );
  }),
];
