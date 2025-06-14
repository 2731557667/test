import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { getCarouselImages } from "@/lib/data";
import { getImgLink } from "@/lib/data";
import Image from "next/image";
import ucekImage from "@/public/img/ucek.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSlider() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  // Warsaw University of Technology image URL
  
  // Create 5 carousel items with different titles but the same image
  const customSlides = [
    { 
      image: "https://www.educanada.ca/programs-programmes/assets/images/banner/l2-programs-costs.png", 
      title: "Leading research type", 
      description: "A leading research university in Poland" 
    },
    { 
      image: "https://www.polsl.pl/wp-content/uploads/2025/05/slider_3.jpg", 
      title: "Advanced research", 
      description: "Innovative technology and research" 
    },
    { 
      image: "https://urk.edu.pl/m/6DHEGWDgnZwM8ASEmGlJTUhtuDwM4FxUZblQVIiwbPQYTcU8CYmEMR39EdT8XQ1wVUm5THiYHA2ljTAAqKhsGM1hhKRwhIlofJwsLYClSWlAEJUYfFk0DWS1TFCM3WE5NEToZVnNtGh4vATkQG1ZGXA04agQmCxRQPhcaNiJYTk0bMhtUc20aFiBKe20VWFpDGiNZGy8QUg9uShwvIR8QTVtxAUohMhpJbAE6LhFSFhtKP1wNL0BKFy9BQX93ShpZR2NXTg/main_market_slider.webp", 
      title: "International cooperation", 
      description: "Global Education Partnership" 
    },
    { 
      image: "https://www.kursor.edu.pl/wp-content/uploads/2023/12/mateuszw123._httpss.mj_.runVKKpFbwYN00_photo_of_beautiful_30_yea_59033159-c117-4c7f-8819-c9138671e9db-1.png", 
      title: "Academic excellence", 
      description: "Pursue knowledge and innovation" 
    },
    { 
      image: "https://www.kursor.edu.pl/wp-content/uploads/2022/11/pexels-dusan-cvetanovic-12541596-scaled.jpg", 
      title: "Future technology", 
      description: "The technology that shapes tomorrow" 
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="w-full relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        {/* Custom navigation buttons */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={() => api?.scrollPrev()}
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={() => api?.scrollNext()}
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Dot navigation */}
        <div className="flex absolute bottom-6 md:bottom-10 z-20 w-full items-center justify-center gap-2">
          {Array(customSlides.length + 1)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index + 1 
                    ? "bg-white w-6" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
        </div>
        
        <CarouselContent>
          {/* First carousel slide */}
          <CarouselItem className="overflow-hidden">
            <div className="relative">
              <Image
                src={ucekImage}
                width={1920}
                height={1080}
                alt="Oriental Pudong Opportunity Organization"
                className="h-[75vh] w-full object-cover transition-transform duration-500"
                priority={true}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="space-y-6 text-center text-white max-w-5xl px-6 animate-fadeIn">
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                    <span className="gradient-text-accent">Oriental Pudong</span>
                    <br />
                    <span>Opportunity Organization</span>
                  </h2>
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-blue-100">Belgrade, Serbia</p>
                  <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/about" 
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/programs" 
                      className="btn-secondary inline-flex items-center justify-center"
                    >
                      Explore Programs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          
          {/* Render custom carousel items */}
          {customSlides.map((slide, index) => (
            <CarouselItem key={index} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={slide.image}
                  width={1920}
                  height={1080}
                  alt={slide.title}
                  className="h-[75vh] w-full object-cover transition-transform duration-500"
                  unoptimized={true} // Allow external image URLs
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="space-y-6 text-center text-white max-w-5xl px-6 animate-fadeIn">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                      <span className="gradient-text-accent">{slide.title}</span>
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-blue-100">{slide.description}</p>
                    <div className="pt-6">
                      <Link 
                        href="/programs" 
                        className="btn-primary inline-flex items-center justify-center"
                      >
                        Explore Programs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
