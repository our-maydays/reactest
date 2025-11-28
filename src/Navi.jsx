import wedding from './assets/wedding.png'
import mymap from './assets/map.png'
import Transport from './Transport'

const Navi = () => {
	return (
		<>
			<h1> Location </h1>
			<img src={wedding} width={'35%'} style={{marginTop:'2%'}} />
			<img src={mymap} width={'90%'} /> <br/>
			Address: Busan Zero Degree <br/><br/>
			<Transport 
				tr_type = 'bus'
			/>
			<Transport
				tr_type = 'car'
			/>
			<Transport 
				tr_type='metro'
			/>
		</>
	)
}

export default Navi
