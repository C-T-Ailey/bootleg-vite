import React, {useEffect, useState, useRef } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'
import axios from 'axios'
import './modal.css'

export default function ProductModal() {

    interface Product {
        _id: string,
        productName: string,
        productDescription: string,
        productPrice: number,
        productSource: string,
        productSourceType: string,
        productStock: number,
        productImageUrls: string[],
        productAudio: string,
        productSampleName: string,
        productSampleArtist: string,
        hasVariant: boolean,
        productVariants: string[],
      }

    const [product, setProduct] = useState<Product>()

    const [exitAnim, setExitAnim] = useState<boolean>(false)

    const modalRef = useRef<HTMLDivElement>(null);

    const {id} = useParams();

    const navigate = useNavigate();

    const getProduct = async () => {
        try {
          let res = await axios.get(`http://localhost:4000/product/detail?id=${id}`)
          console.log("product", res.data.product)
          setProduct(res.data.product)
        }
        catch (err) {
          console.log(err)
        }
      }

    useEffect(()=>{
        getProduct();
        const observerRefValue = modalRef.current;
        disableBodyScroll(observerRefValue!);
        return () => {
            enableBodyScroll(observerRefValue!)
        }

    },[])

    useEffect(()=>{
        if (exitAnim === true) {
            setTimeout(() => {
                navigate('/store')
            }, 500);
        }
    },[exitAnim])

  return (
    <div ref={modalRef} id='modal-wrapper' className={`fixed z-40 w-full h-[calc(100%-5rem)] bg-[rgba(0,0,0,0.7)] flex justify-center items-center fade-in ${exitAnim === true ? 'bg-fade-out' : 'bg-fade-in'}`} onClick={() => setExitAnim(true)}>
        <div id='modal-content' className={`w-[80vw] h-[85vh] bg-white overflow-hidden ${exitAnim === true ? 'modal-fade-out' : 'modal-fade-in'}`} onClick={(e) => e.stopPropagation()}>
            <div id='modal-header' className='relative flex justify-between items-center w-full h-16 p-4'>
                <div className='hairline text-2xl'>More about this product...</div>
                <i className='bi bi-x-lg text-3xl hover:cursor-pointer' onClick={() => setExitAnim(true)}></i>
            </div>
            <hr/>
            {!!product ?
            

            <div id='product-info-wrapper' className='h-[calc(100%-4rem)] w-full flex flex-row p-4'>
                <div id='images' className='w-1/2 h-full flex flex-col'>
                    <div id='main-image' className='h-3/4 flex justify-center items-center'>
                        <img className='max-w-[750px] h-full rounded-md shadow-[3px_3px_10px_#858585]' src={product.productImageUrls[0]} alt='Currently selected product image' />
                    </div>
                    <div id='thumbnails' className='h-full flex flex-row justify-between items-center'>
                        {
                            product.productImageUrls.map((imageUrl, index) => (
                                <div key={index} className='max-w-32 m-auto rounded-md'>
                                    <img className='rounded-md shadow-[2px_2px_5px]' src={imageUrl} alt={`Product image thumbnail ${index}`} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id='vertical-rule' className='h-full w-[1px] bg-[rgb(220,220,220)]'></div>
                
                <div id='information' className='w-1/2 h-full flex flex-col items-start justify-center p-20'>
                    <div id='info-header'>
                        <div className='bungee text-4xl'>{product.productName}</div>
                        <div className='hairline text-xl'>From {product.productSource}</div>
                    </div>
                    <div className='bungee text-4xl'>£{product.productPrice}</div>
                    <div className='hairline text-xl'>{product.productDescription}</div>
                    <div className='audio'>
                        <audio controls src={product.productAudio} />
                    </div>
                    <div className='basket'></div>
                    
                </div>
            </div>

            // <div>Product {id} - {product?.productName}</div>

            :
                <div>Loading...</div>
            }
        </div>
    </div>
  )
}
