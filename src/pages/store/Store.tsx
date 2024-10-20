// imports
import { useEffect, useState } from "react"
import ProductCard from "../../components/productcard/ProductCard"
import Filter from "../../components/storefilter/Filter"
import axios from "axios"
import { useLocation } from "react-router-dom"

interface Product {
  _id: string,
  productName: string,
  productPrice: number,
  productStock: number,
  productSourceType: string,
  productMediaFormat: string,
  productImageUrls: string[],
  createdAt: Date,
}

export default function Store() {

  const location = useLocation()

  // const [currentPage, setCurrentPage] = useState<number>(1)

  const [allProductList, setAllProductList] = useState<Product[]>([])

  const [filteredProductList, setFilteredProductList] = useState<Product[]>([])

  const [selectedSource, setSelectedSource] = useState<string>('All')

  const [selectedFormat, setSelectedFormat] = useState<string>('All')

  const [selectedSort, setSelectedSort] = useState<string>('Date Desc')

  
  const getProductList = async () => {
    try {
      let res = await axios.get('http://localhost:4000/product/index')
      console.log(res.data.product)
      setAllProductList(res.data.product)
      setFilteredProductList(filterSort(res.data.product)!)
    }
    catch (err) {
      console.log(err)
    }
  }
  
  const filterSort = (sortThis: Product[]) => {
    let toSort = Array.from(sortThis)
    if (selectedSort === "Date Asc"){
      return toSort.sort((a,b) => (a.createdAt > b.createdAt) ? 1 : -1)
    }
    else if(selectedSort === "Date Desc")
    {
      return toSort.sort((a,b) => (a.createdAt < b.createdAt) ? 1 : -1)
    }else if(selectedSort === "Alpha AZ")
    {
      return toSort.sort((a,b) => (a.productName > b.productName) ? 1 : -1)
    }else if(selectedSort === "Alpha ZA")
    {
      return toSort.sort((a,b) => (a.productName < b.productName) ? 1 : -1)
    }
  }
  
  useEffect(()=>{
    getProductList()
    console.log(location)
  },[])

  useEffect(()=>{
    let firstBySource = (selectedSource !== "All" ? allProductList.filter(products => products.productSourceType === selectedSource) : allProductList);
    let thenByFormat = (selectedFormat !== "All" ? firstBySource.filter(products => products.productMediaFormat === selectedFormat) : firstBySource);
    setFilteredProductList(filterSort(thenByFormat)!)
  },[selectedFormat])

  useEffect(()=>{
    let firstByFormat = (selectedFormat !== "All" ? allProductList.filter(products => products.productMediaFormat === selectedFormat) : allProductList);
    let thenBySource = (selectedSource !== "All" ? firstByFormat.filter(products => products.productSourceType === selectedSource) : firstByFormat);
    setFilteredProductList(filterSort(thenBySource)!)
  },[selectedSource])

  useEffect(()=>{
    setFilteredProductList(filterSort(filteredProductList)!)
  },[selectedSort])
  
  return (
    <div className="w-full flex flex-col items-center w-fit">
        <div>Store</div>
        <Filter selectedSource={selectedSource} selectedFormat={selectedFormat} selectedSort={selectedSort} setSelectedSource={setSelectedSource} setSelectedFormat={setSelectedFormat} setSelectedSort={setSelectedSort}/>
        <div className="grid grid-cols-5 gap-2">
          {filteredProductList.map((product, index) => 
          (
            <ProductCard key={index} product={product}/>
          ))}
        </div>
    </div>
  )
}
