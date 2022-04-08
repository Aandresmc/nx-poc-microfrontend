import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

/**
 * Get today format string date
 * @return string : "year-month-day"
 */

const todayString = (format?: string) => {
  return dayjs().format(  format ||  'YYYY-MM-DD (h:mm A)' );
};

/**
 * Get today format Object date
 * @return object : "{ year: yyyy, month: mm, day: dd }"
 */

const todayFormatPicker = () => {
  return {
    year: dayjs().get('year'),
    month: dayjs().get('month') + 1,
    day: dayjs().get('date'),
  };
};

/**
 * Get format Object date  from string
 * @param date string : "year-month-day"
 * @return object : "{ year: yyyy, month: mm, day: dd }"
 */
const formatPickerFromString = (date: string) => {
  if (!dayjs(date).isValid()) {
    return null;
  }
  return {
    year: dayjs(date).get('year'),
    month: dayjs(date).get('month') + 1,
    day: dayjs(date).get('date'),
  };
};

/**
 * Get format string date  from Object
 * @param date object : "{ year: yyyy, month: mm, day: dd }"
 * @return string : "year-month-day"
 */
const formatPickerToString = (
  date: { [key: string]: any },
  format?: string
) => {
  const { year, month, day } = date;
  const dayFactory = dayjs()
    .set('year', year)
    .set('month', month - 1)
    .set('date', day);
  return dayFactory.format(format ? format : 'YYYY-MM-DDTHH:mm:ssZ');
};

/**
 * Get min date Object
 * @return object : "{ year: yyyy, month: mm, day: dd }"
 */

const minDatePicker = (value?: number) => {
  const years = value !== undefined ? value : 100;
  const date = dayjs().subtract(years, 'year');
  return  {
    year: date.get('year'),
    month: date.get('month') + 1,
    day: date.get('date'),
  };
};

/**
 * Get max date Object
 * @return object : "{ year: yyyy, month: mm, day: dd }"
 */

const maxDatePicker = () => {
  const date = dayjs().add(100, 'year');
 return {
    year: date.get('year'),
    month: date.get('month') + 1,
    day: date.get('date'),
  };
};

const getAgeDetails = (oldDate: string) => {
  const oldDateFormatted = dayjs(oldDate, 'DD/MM/YYYY');
  const now = dayjs();
  const years = now.diff(oldDateFormatted, 'year');
  const months = now.diff(oldDateFormatted, 'month') - years * 12;
  const days = now.diff(
    oldDateFormatted.add(years, 'year').add(months, 'month'),
    'day'
  );

  return {
    years,
    months,
    days,
    allDays: now.diff(oldDate, 'day'),
  };
};

export {
  todayString,
  todayFormatPicker,
  formatPickerFromString,
  formatPickerToString,
  minDatePicker,
  maxDatePicker,
  getAgeDetails,
};
