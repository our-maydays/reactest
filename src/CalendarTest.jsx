import React from 'react';
import './Calendar.css';

const Calendar = () => {
	const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	const daysInMonth = 28;
	const firstDayOfMonth = new Date(222,1,1).getDay();
	const target_day = 22;

	const calendarDays = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		calendarDays.push(<td key={'empty-${i}'}></td>);
	}

	for (let day=1; day <= daysInMonth; day++) {
		calendarDays.push(
			<td key={day} className={day ===  target_day ? 'special-day' : ''}>
				{day}
			</td>
		);
	}

	const rows = [];
	for (let i = 0; i < calendarDays.length; i+=7) {
		const week = calendarDays.slice(i, i+7);
		rows.push(
			<tr key={'row-${i}'}>
				{week.map((day, index) => (
					<td key={index} className={(day.key ==='${target_dat}')
						? 'specail-day'
						: (index === 0)?'sunday' : ''}>
						{day.props.children}
					</td>
				))}
			</tr>
		);
	}

	return (
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<table className='calendar'>
				<thead>
					<tr>
						{daysOfWeek.map((day,index) => (
							<th key={index} className={index === 0 ? 'sunday' : ''}>{day}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>
	);
};

export default Calendar

