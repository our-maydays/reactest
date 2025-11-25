import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AudioComp from './AudioComp'
import TopMsg from './TopMsg'
import MainPhoto from './MainPhoto'
import WelcomeMsg from './WelcomeMsg'

function App() {
	
	const debug = process.env.NODE_ENV === 'development'?'solid':'none';
	return (
		<>
			<div className='main-frame'>

				<div style={{border: debug, textAlign: 'right'}}>
					<AudioComp/>
				</div>

				<div style={{border: debug}}>
					<TopMsg/>
				</div>

				<div style={{border: debug}}>
					<MainPhoto/>
					Photo
				</div>

				<div style={{border: debug}}>
					<WelcomeMsg/>
					Welcome
				</div>

				<div style={{border: debug}}>
					Calender
				</div>

				<div style={{border:debug}}>
					Gallery
				</div>

				<div style={{border:debug}}>
					Location
				</div>

				<div style={{border:debug}}>
					Account
				</div>

				<div style={{border:debug}}>
					Share
				</div>

			</div>
		</>
	)
}

export default App
