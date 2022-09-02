import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categor }) => {


    const { images, isLoading } = useFetchGifs( categor );

    return (
        <>
            <h3>{categor}</h3>

        
            {
                // solo si isLoading esta en true me muestra el h2
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
