import React from 'react';
import './Calendar.css';

const Calendar = () => {
	const today = new Date();
	const tg_date = new Date(2026,4,9,13,0,0);
	const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	const daysInMonth = 31;
	const firstDayOfMonth = new Date(2026,4,1).getDay();
	const target_day = 9;

	const calendarDays = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		calendarDays.push(<td key={'empty-${i}'}></td>);
	}

	for (let day=1; day <= daysInMonth; day++) {
		calendarDays.push(
			<td key={day} className={day ===  target_day?'special-day':''}>
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
					<td key={index} className={(day.key ==='${target_day}')
						? 'special-day'
						: (index === 0)?'sunday' : ''}>
						{day.props.children}
					</td>
				))}
			</tr>
		);
	}


	return (
		<>
			<p style = {{fontSize: '20px', fontFamily: 'MaruBuri',margin: '20px'}}>
				2222.02.22.
			</p>
				Friday 2:22<br/>

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
			G & B
			<span style={{color: 'magenta'}}>
				{Math.floor((dateOnly(tg_date)-dateOnly(today))/(1000*60*60*24))}
			</span> days left.<br/>

		</>
	);
};

function dateOnly(d) {
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
export default Calendar

