import { parseISO, format, formatRelative, formatDistance, Locale } from 'date-fns';

export function dateFormatPtBr(date: Date) {
  const formattedDate = format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'");

  return formattedDate;
}
