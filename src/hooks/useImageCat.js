import { useEffect, useState } from "react"
import { getImageCat } from '../services/images'

const URL_IMAGE = 'https://cataas.com'

export function useImageCat ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        const firstWord  = fact.split(' ', 1).join(' ')
        getImageCat(firstWord).then(setImageUrl)
    }, [fact])

    return { imageUrl: `${URL_IMAGE}${imageUrl}` }
}