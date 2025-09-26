export const companyInfo = {
  name: 'Kindora Connect',
  logo: './logo.png',
  tagline: 'Empowering Lives. Supporting Independence.',
  description: 'Personalised disability support services across Adelaide & South Australia',
  
  contact: {
    phone: {
      display: '1300 KINDORA',
      number: '1300546367',
      action: 'tel:1300546367',
      iconName: 'Phone'
    },
    email: {
      primary: 'info@kindoraconnect.com.au',
      referrals: 'referrals@kindoraconnect.com.au',
      action: 'mailto:info@kindoraconnect.com.au',
      iconName: 'Mail'
    },
    address: {
      // street: 'Level 2, 123 King William Street',
      city: 'Adelaide',
      state: 'SA',
      postcode: '5000',
      country: 'Australia',
      iconName: 'MapPin'
    },
    hours: {
      weekday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 2:00 PM',
      sunday: 'Closed',
      iconName: 'Clock'
    },
    social: {
      facebook: 'https://facebook.com/kindoraconnect',
      instagram: 'https://instagram.com/kindoraconnect',
      linkedin: 'https://linkedin.com/company/kindoraconnect'
    }
  },

  features: [
    'NDIS Registered Provider',
    'Qualified & Experienced Staff',
    'Person-Centred Approach',
    '24/7 Support Available'
  ],

  services: {
    featured: [
      {
        id: 'personal-care',
        title: 'Personal Care',
        description: 'Compassionate assistance with daily activities including showering, dressing, grooming, and medication support.',
        iconName: 'Heart',
        image: 'https://images.pexels.com/photos/6303591/pexels-photo-6303591.jpeg',
        color: 'from-rose-400 to-pink-500' // Warm, caring burgundy-rose gradient from logo
      },
      {
        id: 'community-participation',
        title: 'Community Participation',
        description: 'Engaging social activities, skill development programs, and community integration support.',
        iconName: 'Users',
        image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
        color: 'from-lime-400 to-emerald-500' // Vibrant growth gradient reflecting community development
      },
      {
        id: 'supported-independent-living',
        title: 'Supported Independent Living',
        description: '24/7 support to help participants live independently in their own homes with dignity and choice.',
        iconName: 'Shield',
        image: 'https://images.pexels.com/photos/6303686/pexels-photo-6303686.jpeg',
        color: 'from-teal-400 to-emerald-500' // Stable, nurturing gradient representing security and growth
      }
    ],
    all: [
      {
        id: 'household-tasks',
        title: 'Household Tasks',
        description: 'Support with cleaning, laundry, shopping, and maintaining a safe and comfortable living environment.',
        iconName: 'Home',
        color: 'from-colour-500 to-red-500'
      },
      {
        id: 'transport-support',
        title: 'Transport Support',
        description: 'Safe and reliable transportation to appointments, social activities, and community events.',
        iconName: 'Car',
        color: 'from-violet-500 to-purple-500'
      },
      {
        id: 'employment-support',
        title: 'Employment Support',
        description: 'Job coaching, workplace training, and ongoing support to achieve employment goals.',
        iconName: 'Briefcase',
        color: 'from-blue-500 to-indigo-500'
      },
      {
        id: 'life-skills',
        title: 'Life Skills Development',
        description: 'Building independence through practical skills training and ongoing support.',
        iconName: 'Brain',
        color: 'from-green-500 to-emerald-500'
      },
      {
        id: 'meal-preparation',
        title: 'Meal Preparation',
        description: 'Assistance with meal planning, grocery shopping, and cooking nutritious meals.',
        iconName: 'Utensils',
        color: 'from-yellow-500 to-orange-500'
      }
    ]
  },

  location: {
    map: {
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3623!2d138.5999!3d-34.92573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced9b6b4e3b7%3A0x5033654628ec640!2sKing%20William%20St%2C%20Adelaide%20SA!5e0!3m2!1sen!2sau!4v1234567890'
    },
    transport: {
      parking: [
        'Street parking available (2-hour limit)',
        'Wilson Parking - Currie Street (5 min walk)'
      ],
      public: [
        'Adelaide Metro - King William Street stops',
        'Wheelchair accessible building'
      ]
    }
  }
};