import { getPublicationData } from '../../utils/formatTime';

describe('getPublicationData', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-05-15T12:00:00Z'));
  });

  test('should return "less than a minute ago" for recent updates', () => {
    const nowTimestamp = 1715774400;

    expect(getPublicationData(nowTimestamp)).toBe('less than a minute ago');
    expect(getPublicationData(nowTimestamp - 45)).toBe(
      'less than a minute ago',
    );
  });

  test('should format minutes correctly', () => {
    const nowTimestamp = 1715774400;

    expect(getPublicationData(nowTimestamp - 60)).toBe('1 minute ago');
    expect(getPublicationData(nowTimestamp - 300)).toBe('5 minutes ago');
  });

  test('should format hours correctly', () => {
    const nowTimestamp = 1715774400;

    expect(getPublicationData(nowTimestamp - 3600)).toBe('1 hour ago');
    expect(getPublicationData(nowTimestamp - 3600 * 3)).toBe('3 hours ago');
  });

  test('should format days correctly', () => {
    const nowTimestamp = 1715774400;

    expect(getPublicationData(nowTimestamp - 86400)).toBe('1 day ago');
    expect(getPublicationData(nowTimestamp - 86400 * 10)).toBe('10 days ago');
  });

  test('should return "less than a minute ago" if timestamp is in the future', () => {
    const nowTimestamp = 1715774400;

    expect(getPublicationData(nowTimestamp + 5000)).toBe(
      'less than a minute ago',
    );
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
