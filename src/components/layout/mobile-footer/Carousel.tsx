import { Carousel as UiCarousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { NavButton } from './NavButton';
import { mobileNavItems } from './nav-items';
import { NavItem } from '@/lib/types';

interface CarouselProps {
  setCarouselApi: (api: CarouselApi) => void;
  activeMenu: string | null;
  handleNavigation: (path?: string) => void;
  handleMenuToggle: (title: string, event: React.MouseEvent) => void;  
}

export function Carousel({ setCarouselApi, activeMenu, handleNavigation, handleMenuToggle }: CarouselProps) {
  return (
    <UiCarousel
      setApi={setCarouselApi}
      opts={{
        align: "center",
        loop: false,
        containScroll: "keepSnaps",
        skipSnaps: false,
        duration: 25,
        dragFree: false,
        inViewThreshold: 0.7
      }}
      className="w-full"
    >
      <CarouselContent className="ml-0" data-carousel-content>
        {mobileNavItems.map((group, groupIndex) => (
          <CarouselItem key={groupIndex} className="pl-0 basis-full">
            <div className="flex h-20 items-start justify-center px-2 pt-0 pb-1">
              <div className="flex items-start justify-evenly w-full max-w-lg mx-auto gap-1">
                {group.map((item) => (
                  <div key={item.title} className="flex-1 min-w-0">
                    <NavButton
                      item={item as NavItem & { label: string }}
                      activeMenu={activeMenu}
                      handleNavigation={handleNavigation}
                      handleMenuToggle={handleMenuToggle}                      
                    />
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </UiCarousel>
  );
}
