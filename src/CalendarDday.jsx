import React from 'react';
import './Calendar.css';

const Calendar = () => {
	const today = new Date();
	const tg_date = new Date(2026, 5, 9, 13, 0, 0);

	const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	const daysInMonth = 31;
	const firstDayOfMont = new Date(2026, 5, 9).getDay();
	const target_day = 9;

// Insert blank before 1st day
	const calendarDays = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		calendarDays.push(<td key={'empty-${i}'}> </td>);
	}

// Insert date
	for (let day = 1; day <= daysInMonth; day++) {
		calendarDays.push(
			<td key={day} className={day == target_day ? 'Wedding-day':''}>
				{day}
			</td>
		);
	}

	//make table by dividing by 7
	const rows = [];
	for (let i = 0; i < calendarDays.length; i+=7) {
		const week = calendarDays.slice(i, i+7);
		rows.push(
			<tr key={'row=${i}'}>
				{week.map((day, index) => (
					<td key={index} className={(day.key === '${target_day}')
						? "Wedding-day"
						: (index === 0)?'sunday':''}>
						{day.props.children}
					</td>
				))}
			</tr>
		);
	}

	// return table format
	return(
		<>
			<p style = {{
				fontSize: '20px',
				fontFamily: 'MaruBuri',
				margin: '20px'
			}}>	2026. 05. 09. </p>
			Saturday 1:00 PM <br/>

			<div style={{display: 'flex', justifyContent: 'center'}}>
				<table className='calendar'>
					<thead>
						<tr>
							{daysOfWeek.map((day, index) => (
								<th key={index} className={index === 0?'sunday':''}> {day} </th>
							))}
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
			Wedding day is
			<span style={{color: 'magenta'}}>
			{Math.floor((tg_date-today)/(1000*60*60*24))}
			</span> days left.
		</>
	);
};

export default Calendar
