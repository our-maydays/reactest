import audioFile from './assets/bgm.mp3'
import audioIcon from './assets/bgm_on.png'
import { useEffect, useRef, useState } from 'react';

const AudioComp = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const handleAudioToggle = () => {
		// Load after icon click if preloaded error occur in iphone
		if (!audioRef.current) {
			audioRef.current = new Audio(audioFile);
			audioRef.current.load()
			audioRef.current.addEventListner('ended', () => setIsPlaying(false));
		}
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};
	useEffect( () => {
		// Stop bgm if leave page
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current = null;
			}
		}
	}, [])

	return (
		<>
			<img
				src={audioIcon}
				width={'20px'}
				style={{marginRight: '10px', marginTop: '10px'}}
				onClick={() => handleAudioToggle()}
			/>
		</>
	)
}

export default AudioComp
