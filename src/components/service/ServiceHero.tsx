import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  gradientFrom: string;
  gradientTo: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  gradientFrom,
  gradientTo
}) => {
  return (
    <section 
      className={`relative py-32 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-white max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-orange-300">{title}</h2>
          <p className="text-xl md:text-2xl leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;