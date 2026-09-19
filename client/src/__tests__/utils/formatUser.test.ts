import {
  getUserInitials,
  formatRegistrationDate,
} from '../../utils/formatUser';

describe('userUtils', () => {
  describe('getUserInitials', () => {
    test('should return 1 or 2 initials without special symbols in uppercasxe', () => {
      expect(getUserInitials('')).toBe('');
      expect(getUserInitials('AlLLGexguye')).toBe('AL');
      expect(getUserInitials('**2322&^%$g__282";;4')).toBe('G');
      expect(getUserInitials('12__--32^^1gEiei')).toBe('GE');
    });
  });

  describe('formatRegistrationDate', () => {
    test('should return empty string for zero timestamp', () => {
      expect(formatRegistrationDate(0)).toBe('');
    });

    test('should format regular timestamp to US format', () => {
      expect(formatRegistrationDate(1715774400)).toBe('May 15, 2024');
    });
  });
});
