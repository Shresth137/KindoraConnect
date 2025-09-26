import React, { useState, useEffect } from 'react';
import { Contact, Phone, Mail, MapPin, LucideIcon } from 'lucide-react';

interface ContactButton {
  icon: LucideIcon;
  href: string;
  label: string;
  delay: string;
  target?: string;
}

const contactfab: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isClickExpanded, setIsClickExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
      const scrolledDown: boolean = scrollTop > 100;
      setIsScrolled(scrolledDown);

      if (scrolledDown && isClickExpanded) {
        setIsClickExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClickExpanded]);

  const shouldShowButtons: boolean = !isScrolled || isExpanded || isClickExpanded;
  const mobile: string = "tel:+61123456789";
  
  const contactButtons: ContactButton[] = [
    {
      icon: Phone,
      href: 'tel:+61123456789',
      label: 'Call us',
      delay: 'delay-75'
    },
    {
      icon: Mail,
      href: 'mailto:info@example.com',
      label: 'Email us',
      delay: 'delay-150'
    },
    {
      icon: MapPin,
      href: 'https://maps.google.com/?q=Adelaide+SA+Australia',
      label: 'Find us',
      delay: 'delay-300',
      target: '_blank'
    }
  ];

  return (
    // 👇 Only visible on sm & md
    <div className="block sm:block md:block lg:hidden fixed bottom-6 left-6 z-50">
      {/* Contact Buttons */}
      <div
        className="flex flex-col-reverse gap-3 mb-3"
        onMouseEnter={() => isScrolled && setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {contactButtons.map((button: ContactButton, index: number) => {
          const Icon = button.icon;
          return (
            <a
              key={index}
              href={button.href}
              target={button.target}
              className={`
                w-12 h-12 backdrop-blur-sm
                rounded-full flex items-center justify-center
                shadow-lg hover:shadow-xl
                transform transition-all duration-300 ease-out
                ${button.delay}
                ${shouldShowButtons 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-8 opacity-0 scale-75 pointer-events-none'
                }
                hover:scale-110 active:scale-95
                ${isScrolled 
                  ? 'bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900' 
                  : 'bg-white/10 hover:bg-white/20 text-white hover:text-white'
                }
              `}
              title={button.label}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>

      {/* Main FAB */}
      <button
        className={`
          w-14 h-14 backdrop-blur-sm
          rounded-full flex items-center justify-center
          shadow-lg hover:shadow-xl
          transform transition-all duration-300 ease-out
          hover:scale-110 active:scale-95
          ${isScrolled 
            ? 'bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 ring-2 ring-gray-300/50' 
            : 'bg-cyan-600 hover:bg-cyan-700 text-white ring-2 ring-cyan-400/50'
          }
        `}
        onMouseEnter={() => isScrolled && setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsClickExpanded(!isClickExpanded)}
        title="Contact us"
      >
        <Contact size={24} />
      </button>
    </div>
  );
};

export default contactfab;