const Transport = ({tr_type}) => {
	var rev_tr_type = tr_type
	var contents = '';
	if (tr_type === 'bus') {
		rev_tr_type = 'BUS'
		contents = `간선버스(파란색) <br/>
		143,146,341,123,13 <br/>
		지선버스(녹색)<br/>
		2413, 1423, 2342, 3462, 11-2 <br/>
		광역버스(빨강색) <br/>
		9104, 2923`
	} else if (tr_type === 'metro') {
		rev_tr_type = 'METRO'
		contents = `지하철 1호선 00역 0번 출구 <br/>
		0번 출구: 버스 대기<br/>
		1번 출구: 도보 10분`
	} else if (tr_type === 'car') {
		rev_tr_type = 'CAR'
		contents = `대교 지나서 직진 <br/>
		다리 올라가면 좀 대기 후 지나가기 <br/>
		길 좁아지니 보행자 조심`
	}

	return (
		<div>
			<div style= {{fontSize: '16px'}}>
				{rev_tr_type}로 오시는 분들
			</div>
			<div style= {{fontSize: '12px'}}>
				<div dangerouslySetInnerHTML={{__html: contents}} />
			</div>
			<br/>
		</div>
	)
}

export default Transport

