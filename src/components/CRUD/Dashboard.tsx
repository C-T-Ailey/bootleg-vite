import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CRUDModal from '../CRUD/CRUDModal.tsx'

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

export default function Dashboard() {

  useEffect(()=>{
    getProductList()
  },[])

  const [productList, setProductList] = useState<Product[]>([])

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const getProductList = async () => {
    try {
      let res = await axios.get('http://localhost:4000/product/index')
      console.log(res.data.product)
      setProductList(res.data.product)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='h-[calc(100vh-5rem)] w-fit'>
      
      <div className={!modalOpen ? `hidden` : `absolute top-21 left-0`}>
        <CRUDModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </div>

      <div onClick={()=>setModalOpen(true)}>
        Add new product
      </div>

      <div className='h-[50%] overflow-scroll w-fit flex flex-col justify-between'>
        {productList.map((product, index) => (
          <div key={index} className='my-1 flex flex-row w-full'>
            <div className='mr-10 text-left w-[30rem]'>
              {product.productName}
            </div>
            
            <div className='text-right'>
              <Link to='/' />
              Edit
            </div>
          </div>
        )
        )}
      </div>

    </div>
  )
}
