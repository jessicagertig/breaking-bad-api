import { rest } from 'msw';
import * as mockDb from './testDb';

const apiUrl = `api`;

export const handlers = [
  rest.get(`${apiUrl}/characters/random`, async(req, res, ctx) => {
    console.log('apiUrl', apiUrl)
    const character = await mockDb.getRandom('character')
    return res(
      ctx.status(200),
      ctx.json({character})
    )
  }),

  rest.get(`${apiUrl}/episodes/random`, async(req, res, ctx) => {
    const episode= await mockDb.getRandom('episode')
    return res(
      ctx.status(200),
      ctx.json({episode})
    )
  }),

  rest.get(`${apiUrl}/deaths/random`, async(req, res, ctx) => {
    const death = await mockDb.getRandom('death')
    return res(
      ctx.status(200),
      ctx.json({death})
    )
  }),

  rest.get(`${apiUrl}/quotes/random`, async(req, res, ctx) => {
    const quote = await mockDb.getRandom('quote')
    return res(
      ctx.status(200),
      ctx.json({quote})
    )
  }),

  rest.get(`${apiUrl}/characters`, async(req, res, ctx) => {
    const characters = await mockDb.getAll('character')
    return res(
      ctx.status(200),
      ctx.json({characters})
    )
  }),

  rest.get(`${apiUrl}/episodes`, async(req, res, ctx) => {
    const episodes= await mockDb.getAll('episode')
    return res(
      ctx.status(200),
      ctx.json({episodes})
    )
  }),

  rest.get(`${apiUrl}/deaths`, async(req, res, ctx) => {
    const deaths = await mockDb.getAll('death')
      return res(
      ctx.status(200),
      ctx.json({deaths})
    )
  }),

  rest.get(`${apiUrl}/quotes`, async(req, res, ctx) => {
    const quotes = await mockDb.getAll('quote')
    return res(
      ctx.status(200),
      ctx.json({quotes})
    )
  })
];