import { useCallback, useState } from "react"
import { UploadImages } from "../../services/products/Products"

interface Props {
    id:number 
    images:File[]
}

export const useProductsGallery = ()=>{
    const [loading, setLoading] = useState<boolean>(false)
    const uploadImages = useCallback( async (props:Props) => {

        setLoading(true)

        try{
            const result = UploadImages(props)
            console.log(result)
        }catch(e){
            throw e
        }finally {
            setLoading(false)
        }
        
    },[]) 


    return {uploadImages,loading}
}