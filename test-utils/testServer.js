import { setupServer } from 'msw/node';
import { handlers } from './testHandlers';

export const server = setupServer(...handlers)