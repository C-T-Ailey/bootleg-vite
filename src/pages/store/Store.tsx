// imports
import ProductCard from "../../components/productcard/ProductCard"
import Filter from "../../components/storefilter/Filter"

export default function Store() {
  return (
    <div className="flex flex-col w-fit h-fit">
        <div>Store</div>
        <Filter/>
        <ProductCard></ProductCard>
    </div>
  )
}
