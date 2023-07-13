import './App.css'
import { useFactCat } from './hooks/useFactCat'
import { useImageCat } from './hooks/useImageCat'

export function App() {
    const {fact, refreshFact} = useFactCat()
    const { imageUrl } = useImageCat({ fact })

    const handdleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App gatitos</h1>
            <button onClick={handdleClick}>Get New Fact</button>
            <section>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words of ${fact}`} />}
            </section>
        </main>
    )
}