import {useRef} from "react"
 
import { Card, CardContent } from "@/components/ui/card-modified"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-modified"

import Autoplay from "embla-carousel-autoplay"
import { carouselStructure } from "../../structures/CarouselStructures"

export function CarouselComponent() {
    
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-2xl my-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
    >
    <CarouselContent>
        {carouselStructure.map((item, index) => (
        <CarouselItem key={index}>
            <div className="p-1">
            <Card>
                <CardContent className="flex items-center justify-center align-middle">
                    <img src={item.image} className="object-cover h-full w-auto rounded-3xl shadow-2xl"/>
                </CardContent>
            </Card>
            </div>
        </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious className="bg-transparent"/>
    <CarouselNext />
    </Carousel>
  )
}