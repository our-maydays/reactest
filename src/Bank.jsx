import copyicon from './assets/Copy.png'

const MyBank = ({src}) => {

	const copy_bank = (num) => {
		navigator.clipboard.writeText(num)
		alert('Account Number is coppied')
	}

	const dt = src === 'W' ? {
		//Bride's Account Info
		'Mother' : ['B.M', 'B.M.Bank', '111-1111-11111'],
		'Father' : ['B.F', 'B.F.Bank', '222-2222-22222'],
		'Me' : ['B', 'B.Bank', '333-3333-33333'],
	} : {
		//Groom's Account Info
		'Mother' : ['G.M', 'G.M.Bank', '111-1111-11111'],
		'Father' : ['G.F', 'G.F.Bank', '222-2222-22222'],
		'Me' : ['G','G.Bank', '333-3333-33333'],
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
			{
				['Mother','Father','Me'].map((key,idx) => {
					return <div key={idx}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							textAlign: 'left',
							borderRadius: '12px',
							padding: '12px',
							margin: '12px',
						}}>

						<div>
							<p style={{fontFamily:'MaruBuriLight', fontSize: '18px', marginTop: '0px'}}>
								{dt[key][0]}
							</p>
							{dt[key][1]} {dt[key][2]}
						</div>

						<div style={{width: '3vw'}}> </div>

						<button
							onClick={() => copy_bank(dt[key][2])}
							style= {{
								backgroundColor: 'rgb(249,245,242)',
								color: 'black',
								border: '1px solid rgb(197,219,238)',
								padding: '6px',
								borderRadius: '5px',
							}}
						>
							<img src={copyicon} width={'12px'} />
							<span style={{marginLeft: '10px', marginRight: '5px'}}>
								COPY
							</span>
						</button>
					</div>
				})
			}
		</div>
	)
}

export default MyBank

