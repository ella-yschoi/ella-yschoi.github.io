// Calculate employment duration (LinkedIn standard - US/Canada Western time)
export const calculateDuration = (
  startDate: string,
  endDate?: string
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  // Get current time based on US/Canada Western timezone (PST/PDT)
  const now = new Date();
  const pstOffset = -8; // PST is UTC-8
  const pdtOffset = -7; // PDT is UTC-7 (Daylight Saving Time)

  // Check if Daylight Saving Time is active (2nd Sunday in March ~ 1st Sunday in November)
  const isDST = (date: Date) => {
    const year = date.getFullYear();
    const dstStart = new Date(
      year,
      2,
      8 + ((15 - new Date(year, 2, 8).getDay()) % 7)
    );
    const dstEnd = new Date(
      year,
      10,
      1 + ((7 - new Date(year, 10, 1).getDay()) % 7)
    );
    return date >= dstStart && date < dstEnd;
  };

  const offset = isDST(now) ? pdtOffset : pstOffset;
  const pstNow = new Date(now.getTime() + offset * 60 * 60 * 1000);

  const currentEnd = endDate ? end : pstNow;

  // LinkedIn standard: Include the starting month in calculation
  // Example: Started in Sep 2024 = Sep, Oct, Nov, Dec, Jan, Feb, Mar, Apr, May, Jun, Jul = 11 months
  const months =
    (currentEnd.getFullYear() - start.getFullYear()) * 12 +
    (currentEnd.getMonth() - start.getMonth()) +
    1;

  if (months === 0) {
    const days = Math.floor(
      (currentEnd.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return `${days} days`;
  } else if (months === 1) {
    return `${months} mo`;
  } else {
    return `${months} mos`;
  }
};
