import {getApi} from '../Apis/consumoApi';
import {ImgItems} from './ImgItems';
import { useState,useEffect } from 'react';


export const PintadoImg = ({valor}) =>{
    const [infoApi, setInfoApi] = useState([])
    useEffect(() => {
    getApi(valor).then((newImages) => setInfoApi(newImages.hits));
    }, [valor]);
  

    return(
        <div>
           {
                infoApi.map((img)=>{
                  return  <ImgItems key={img.id} {...img}/>
                })
           }
        </div>
    )
}