import type { Maybe } from './apply-query-filters.utils';
import { isNullableValue } from './is-nullable-value.util';

export type Formats =
  | 'datetime-with-sub-values'
  | 'date'
  | 'datetime-without-sub-values';

export const formatToDate = (
  currentDate: string | number | Date,
  format: Formats = 'datetime-with-sub-values',
): string => {
  const showSubValues =
    format === 'datetime-with-sub-values' ? '2-digit' : undefined;

  const dateFormatter = new Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
    minute: showSubValues,
    hour: showSubValues,
    second: showSubValues,
  });

  const datefyedValue = new Date(currentDate);

  if (format === 'date' && !datefyedValue.getHours())
    datefyedValue.setDate(datefyedValue.getDate() + 1);

  return dateFormatter.format(datefyedValue);
};

export const formatRelativeTime = (
  value: number,
  formatType?: Intl.RelativeTimeFormatUnit,
): string => {
  const formater = new Intl.RelativeTimeFormat('pt-bt', {
    numeric: 'auto',
  });

  return formater.format(value, formatType || 'day');
};

export function formatDate(date: Date): string {
  return String(date.toISOString().split('T')[0]);
}

export const today = formatDate(new Date());

export function checkDates<DateVal = Maybe<string | Date>>(
  start: DateVal,
  end: DateVal,
  isStartToday = false,
): boolean {
  let datefyedStart: Date | undefined;

  if (!isNullableValue(start)) {
    if (typeof start === 'string') {
      datefyedStart = new Date(start);
    } else if (start instanceof Date) {
      datefyedStart = start;
    }
  }

  if (isStartToday && datefyedStart) {
    datefyedStart.setHours(0, 0, 0, 0);
  }

  let datefyedEnd: Date | undefined;

  if (!isNullableValue(end)) {
    if (typeof end === 'string') {
      datefyedEnd = new Date(end);
    } else if (end instanceof Date) {
      datefyedEnd = end;
    }
  }

  if (datefyedStart && datefyedEnd) {
    return datefyedStart <= datefyedEnd;
  }

  return true;
}
