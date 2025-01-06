import { rest } from 'msw';


export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Wajdan' },
        { id: 2, name: 'Sam' },
        { id: 3, name: 'Peter' },
        { id: 4, name: 'John' },
      ])
    );
  }),
];
