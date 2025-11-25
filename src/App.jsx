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

				<div className='fade-in' style={{border: debug}}>
					<TopMsg/>
				</div>

				<div className='fade-in' style={{border: debug}}>
					<MainPhoto/>
					Photo
				</div>

				<div className='fade-in' style={{border: debug}}>
					<WelcomeMsg/>
					Welcome
				</div>

				<div className='fade-in' style={{border: debug}}>
					Calender
				</div>

				<div className='fade-in' style={{border:debug}}>
					Gallery
				</div>

				<div className='fade-in' style={{border:debug}}>
					Location
				</div>

				<div className='fade-in' style={{border:debug}}>
					Account
				</div>

				<div className='fade-in' style={{border:debug}}>
					Share
				</div>

			</div>
		</>
	)
}

export default App
