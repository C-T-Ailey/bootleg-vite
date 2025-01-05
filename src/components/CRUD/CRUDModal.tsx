import {useEffect, useState, useRef } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'
import axios from 'axios'
import '../../pages/store/modal.css'

interface CRUDProps {
    modalOpen: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProductModal({modalOpen, setModalOpen}:CRUDProps) {

    // interface Product {
    //     _id: string,
    //     productName: string,
    //     productDescription: string,
    //     productPrice: number,
    //     productSource: string,
    //     productSourceType: string,
    //     productStock: number,
    //     productImageUrls: string[],
    //     productAudio: string,
    //     productSampleName: string,
    //     productSampleArtist: string,
    //     hasVariant: boolean,
    //     productVariants: string[],
    // }


    // const [product, setProduct] = useState<Product>()

    const [exitAnim, setExitAnim] = useState<boolean>(false)

    const [name, setName] = useState<string>("")

    const modalRef = useRef<HTMLDivElement>(null);

    const {id} = useParams();

    const navigate = useNavigate();

    // const getProduct = async () => {
    //     try {
    //       let res = await axios.get(`http://localhost:4000/product/detail?id=${id}`)
    //       setProduct(res.data.product)
    //     }
    //     catch (err) {
    //       console.log(err)
    //     }
    //   }

    useEffect(()=>{
        // getProduct();
        const observerRefValue = modalRef.current;
        disableBodyScroll(observerRefValue!);
        return () => {
            enableBodyScroll(observerRefValue!)
        }

    },[])

    useEffect(()=>{
        if (exitAnim === true) {
            setTimeout(() => {
                // navigate('/store')
                setModalOpen(false);
                setExitAnim(false);
            }, 500);
        }
    },[exitAnim])


  return (
    <div ref={modalRef} id='modal-wrapper' className={`fixed z-40 w-full h-[calc(100%-5rem)] bg-[rgba(0,0,0,0.7)] flex justify-center items-center fade-in ${exitAnim === true ? 'bg-fade-out' : 'bg-fade-in'}`} onClick={() => setExitAnim(true)}>
        <div id='modal-content' className={`w-[80vw] h-[85vh] bg-white overflow-hidden ${exitAnim === true ? 'modal-fade-out' : 'modal-fade-in'}`} onClick={(e) => e.stopPropagation()}>
            
            <div id='modal-header' className='relative flex justify-between items-center w-full h-16 p-4'>
                <div className='hairline text-2xl'>Add A New Product</div>
                <i className='bi bi-x-lg text-3xl hover:cursor-pointer' onClick={() => setExitAnim(true)}></i>
            </div>

            <hr/>
        
            <div id='product-info-wrapper' className='h-[calc(100%-4rem)] w-full flex flex-row p-4'>
                <form>
                    <label>Product Name
                        <input type='text' value={name} />

                    </label>
                </form>
            </div>
        </div>
    </div>
  )
}
