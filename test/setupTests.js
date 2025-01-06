import '@testing-library/jest-dom';
import { server } from '../src/mock/server.js';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

