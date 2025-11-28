import { useEffect, useState } from "react";
import Modal from './Modal';

// src/assets/images에 있는 모든 이미지를 한번에 불러오기
const imagePaths = import.meta.glob('./assets/images/*.{png,jpg,jpeg,svg,webp}');

const Gallery  = ({title}) => {
	const [image_modal, set_image_modal] = useState({isopen:false, src:null});
	const open_modal = (src) => {
		set_image_modal({isopen:true, src:src})
	}
	
  const [isflip, set_isflip] = useState(true);
  const [images, set_images] = useState([]);
  const [all_images, set_all_images] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Object.entries(imagePaths).map(([path, importImage]) =>
        importImage().then((module) => ({ path, src: module.default }))
      );
      const loadedImages = await Promise.all(imagePromises);

      // 숫자 기준으로 정렬
      loadedImages.sort((a, b) => {
        const _a = parseInt(a.path.split("/").pop().split(".")[0]);
        const _b = parseInt(b.path.split("/").pop().split(".")[0]);
        return _a - _b;
      });

      // 3개씩 끊어서 2차원 배열로
      const temp = [];
      for (let i = 0; i < 6; i++) {
        temp.push(loadedImages.slice(i*3, (i+1)*3));
      }

      set_images(temp.slice(0, 2)); // 초기 2행만
      set_all_images(temp);
    };

    loadImages();
  }, []);

  const flip_gallery = () => {
    const row_cnt = isflip ? 6 : 2;
    set_images([...all_images].slice(0, row_cnt));
    set_isflip(!isflip);
  };

  return (
    <>
      <h1>{title}</h1>
			{
			[images].map((v,i) => {
				return(
					v.map((v2,i2) => {
						return(
							<div key={i*100 + i2*10} style={{display: 'flex'}}>
							{
								[0,1,2].map((v3,i3) => {
									return(
										<div style={{margin:'2%', border:'1px solid rgb(230,224,255)', borderRadius: '12px', width: '29%', heigth: '111.896px', overflow:'hidden'}}>
											<img key={v2[v3].path} src={v2[v3].src} onClick={() => {open_modal(v2[v3].src); document.body.classList.add('modal-open')}} height={'100%'} width={'100%'} alt='my image'/>
										</div>
									)
								})
							}
							</div>
						)
					})
				)
			})
			}
			<div
				onClick={() => {flip_gallery()}}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: '5px',
						marginBottom: '20px',
					}}
			>
				{isflip ? 'More':'Close'}
			</div>

			<Modal
				isOpen={image_modal}
				onClose={() => {set_image_modal({isopen:false, src:null}); document.body.classList.remove('modal-open')}}
				mystyle={{backgroundColor:'rgb(0,0,0)'}}
			>
				<div style={{display:'flex', justifyContent:'center'}}>
					<img src={image_modal.src} width={'100%'}/>
				</div>
			</Modal>
		</>
	)
}

export default Gallery;
