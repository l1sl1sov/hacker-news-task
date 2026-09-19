import { formatFilterName } from '../../utils/formatFilterName';

describe('formatFilterNameTest', () => {
  test('should return formated for UI view with first uppercase letter and the space symbol before stories', () => {
    expect(formatFilterName('perfectStories')).toBe('Perfect stories');
    expect(formatFilterName('save89__tStories')).toBe('Save89__t stories');
  });
});
