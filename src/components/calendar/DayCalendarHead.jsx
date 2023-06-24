import { parse } from 'date-fns/esm';
import { useParams } from 'react-router-dom';

export const DayCalendarHead = () => {
  const { currentDay } = useParams();
  const parsedCurrentDay = parse(currentDay, 'd-MMM-yyyy', new Date());
  console.log(parsedCurrentDay);
  return <div>Hello</div>;
};
