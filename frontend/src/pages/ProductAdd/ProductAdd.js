import React, { useEffect, useRef, useState } from 'react'
import "./ProductAdd.css";


function ProductAdd() {
    const [colorinput,setcolor] = useState('#ff0000');
    const [imgproduct,setimg] = useState(null);
    const FormAdd = useRef();
  

    const [Tab,setTab] = useState(false)
    useEffect(()=>{
        if(Tab === true)
        {
            FormAdd.current.style.display = 'flex';
        }
        if(Tab === false)
        {
            FormAdd.current.style.display = 'none';
        }
    },[Tab])
//   const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className={"admin-product"}>
        <form className={'product'}>
            
            <div className={"title-product"}>
                <h4>Name</h4>
                <input placeholder='Tiêu đề' className={"input-title"}/>
            </div>
            <div className={"des-product"}>
                <h4>Description</h4>
                <input placeholder='Mô tả' className={"input-des"} />
            </div>
            <div className={"title-product"}>
                <h4>Price</h4>
                <input placeholder='Giá' className={"input-price"}/>
            </div>
            
            <ul>
                {}
            </ul>
            <div className={"form-product"} ref={FormAdd}>
            {imgproduct && (

                <div className='src-img'>
                    <img src={URL.createObjectURL(imgproduct)} width={"200px"} height={"200px"} alt='anh'/>
                    <button className='reset-img' onClick={()=> setimg(null)}>REMOVE</button>
                </div>
            )}
            {imgproduct === null &&
             <div>

                    <input type={'file'} id={"img-product"} onChange={(e) => {
                        // console.log(e.target.files[0])
                        setimg(e.target.files[0])
                    }}/>
                    <label for='img-product' className='label-img'>
                    </label>
                </div>
            }
               <div className='form-item-pro'>
                    <div className='form-color mt-10'>
                        <input type={"text"} id={"input-text-color"} placeholder='Color'/>
                        <input type="color" value={colorinput} id='input-color' onChange={(e)=>{
                                setcolor(e.currentTarget.value);
                            }} className={"input-color"}/>
                    </div>
               </div>
                <div className={"btn-remove"} onClick={() => setTab(false)}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className={"btn-add"} onClick={() => setTab(true)}>
                <i class="fa-solid fa-plus"></i>
            </div>
        </form>
    </div>
  )
}

export default ProductAdd