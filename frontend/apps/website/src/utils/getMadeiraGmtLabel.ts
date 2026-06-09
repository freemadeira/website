export const getMadeiraGMTLabel = (date: Date = new Date()) => {
  const tz = 'Atlantic/Madeira';

  const utc = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  const local = new Date(date.toLocaleString('en-US', { timeZone: tz }));

  const diffHours = (local.getTime() - utc.getTime()) / 1000 / 60 / 60;

  return `GMT${diffHours >= 0 ? '+' : ''}${diffHours}`;
};
