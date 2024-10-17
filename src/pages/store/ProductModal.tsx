import {useEffect, useState, useRef } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

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
        hasVariant: boolean,
        productVariants: string[],
      }

    const [product, setProduct] = useState<Product>()

    const modalRef = useRef();

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
        // const observerRefValue = modalRef.current;
        getProduct()

    },[])

  return (
    <div id='modal-wrapper' className='fixed z-40 w-full h-[calc(100%-5rem)] bg-[rgba(0,0,0,0.7)] flex justify-center items-center' onClick={() => navigate('/store')}>
        <div id='modal-content' className='w-[80vw] h-[85vh] bg-white overflow-hidden' onClick={(e) => e.stopPropagation()}>
            <div id='modal-header' className='relative flex justify-between w-full h-16 p-4'>
                <div>More about this product...</div>
                <i className='bi bi-x-lg text-3xl hover:cursor-pointer' onClick={() => navigate('/store')}></i>
            </div>
            <hr/>
            {!!product ?
            

            <div id='product-info-wrapper' className='h-[calc(100%-4rem)] w-full flex flex-row'>
                <div id='images' className='w-1/2 h-full flex flex-col'>
                    <div id='main-image' className='h-3/4 flex justify-center items-center'>
                        <img className='max-w-[750px]' src={product.productImageUrls[0]} alt='Currently selected product image' />
                    </div>
                    <hr/>
                    <div id='thumbnails' className='max-h-[25%] h-52 pb-10 flex flex-row justify-between items-center'>
                        {
                            product.productImageUrls.map((imageUrl, index) => (
                                <div className='max-w-32 m-auto'>
                                    <img key={index} src={imageUrl} alt={`Product image thumbnail ${index}`} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id='vertical-rule' className='h-full w-[1px] bg-[rgb(220,220,220)]'></div>
                
                <div id='information'>
                    
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
