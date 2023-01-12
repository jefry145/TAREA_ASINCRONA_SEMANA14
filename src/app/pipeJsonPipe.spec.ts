import { JsonPipe } from './pipeJsonPipe'

describe('JsonPipe', () => {
    it('create an instance', () => {
      const pipe = new JsonPipe();
      expect(pipe).toBeTruthy();
    });
  });