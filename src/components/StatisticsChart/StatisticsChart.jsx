import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilterDate } from 'redux/filterdate/filterdate-selector';
import {
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './StatisticsChart.css';

// Для прикладу створив json
import { getTasks } from '../../exampleTask';

const StatisticsChart = () => {
  const toDay = useSelector(selectFilterDate);
  const tasks = getTasks();

  let filteredTasksByDay = null;
  let filteredTasksByMonth = null;
  let todoByDay = 0;
  let inprogressByDay = 0;
  let doneByDay = 0;
  let todoByMonth = 0;
  let inprogressByMonth = 0;
  let doneByMonth = 0;

  function filteredTasks(tasks) {
    filteredTasksByDay = tasks.filter(
      task => new Date(task.date).getDate() === new Date(toDay).getDate()
    );
    filteredTasksByMonth = tasks.filter(
      task => new Date(task.date).getMonth() === new Date(toDay).getMonth()
    );
    todoByDay = filteredTasksByDay.filter(
      task => task.category === 'to-do'
    ).length;
    inprogressByDay = filteredTasksByDay.filter(
      task => task.category === 'in-progress'
    ).length;
    doneByDay = filteredTasksByDay.filter(
      task => task.category === 'done'
    ).length;
    todoByMonth = filteredTasksByMonth.filter(
      task => task.category === 'to-do'
    ).length;
    inprogressByMonth = filteredTasksByMonth.filter(
      task => task.category === 'in-progress'
    ).length;
    doneByMonth = filteredTasksByMonth.filter(
      task => task.category === 'done'
    ).length;
  }
  filteredTasks(tasks);

  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
  const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;

  const data = [
    {
      name: 'To Do',
      dv: todoByDay,
      mv: todoByMonth,
      dp: `${Math.round((todoByDay / allTasksByDay) * 100) || 0}%`,
      mp: `${Math.round((todoByMonth / allTasksByMonth) * 100) || 0}%`,
    },
    {
      name: 'In Progress',
      dv: inprogressByDay,
      mv: inprogressByMonth,
      dp: `${Math.round((inprogressByDay / allTasksByDay) * 100) || 0}%`,
      mp: `${Math.round((inprogressByMonth / allTasksByMonth) * 100) || 0}%`,
    },
    {
      name: 'Done',
      dv: doneByDay,
      mv: doneByMonth,
      dp: `${Math.round((doneByDay / allTasksByDay) * 100) || 0}%`,
      mp: `${Math.round((doneByMonth / allTasksByMonth) * 100) || 0}%`,
    },
  ];

  return (
    <div className="statistics__container">
      <p className="statistics__title">Tasks</p>
      <div className="bar__chart">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 24,
            }}
            barGap={14}
          >
            <defs>
              <linearGradient id="colorDv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0} />
                <stop offset="95%" stopColor="#FFD2DD" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorMv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3E85F3" stopOpacity={0} />
                <stop offset="95%" stopColor="#3E85F3" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#E3F3FF" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              height={40}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              width={40}
              allowDecimals={false}
              tickMargin={20}
            />
            <Tooltip />
            <Bar dataKey="dv" fill="url(#colorDv)" barSize={27}>
              <LabelList dataKey="dp" position="top" />
            </Bar>
            <Bar dataKey="mv" fill="url(#colorMv)" barSize={27}>
              <LabelList dataKey="mp" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default StatisticsChart;
