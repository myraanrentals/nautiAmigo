// Environment configuration
const environment = {
  production: true,
  redirectUrlProd: 'https://bookings.nautiamigo.com/',
  redirectUrlDev: 'http://localhost:36195/',
};

// Helper function to get the base URL based on environment
function getBaseUrl() {
  return environment.production ? environment.redirectUrlProd : environment.redirectUrlDev;
}

// Helper function to calculate discount percentage
function calculateDiscount(regularPrice, discountPrice) {
  if (!regularPrice || !discountPrice) return 0;
  const regular = parseFloat(regularPrice);
  const discount = parseFloat(discountPrice);
  if (regular <= 0 || discount >= regular) return 0;
  return Math.round(((regular - discount) / regular) * 100);
}

 function openWhatsApp(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    const url = `https://wa.me/${cleanPhone}`;
    window.open(url, '_blank');
}

const offer = [
  // Nauti Amigo Cruise(Luxury)
  {
    priceDetails: {
      regularPrice: '3000',
      discountPrice: '2499',
    },
    cruiseId: 5,
    title: 'SILVER SAIL EXPERIENCE',
    subTile: 'SILVER SAIL EXPERIENCE',
    category: 'Cruise',
    type: ['luxury'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }],
    routingUrl: 'book-dinner-cruise-in-goa/details/book-silver-sail-experience-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['3 hours', 'Panjim '],
    oldPrice: '3000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '2499',
    image: '/img/DinnerCruises/Nauti AMigo/i1.png',
    bannerImgs: [
      '/img/DinnerCruises/Nauti AMigo/i2.webp',
      '/img/DinnerCruises/Nauti AMigo/i6.webp',
      '/img/DinnerCruises/Nauti AMigo/i3.webp',
      '/img/DinnerCruises/Nauti AMigo/i4.webp',
      '/img/DinnerCruises/Nauti AMigo/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '3 Hours Cruising on Mandovi River',
            'Dance Performances & Entertainment on Board',
          ],
        },
        {
          category: 'Meals',
          items: ['Soup, Starter', 'Buffet Dinner (Veg/Non-Veg)', 'Complimentary Dinks & Snacks'],
        },
        {
          category: 'Activities',
          items: ['Sightseeing of Panjim City'],
        },
      ],
    },
    topFeatures: [
      {
        icon: 'event_available',
        title: 'Instant Confirmation',
        description: 'Get your tickets mailed right away',
      },
      {
        icon: 'free_cancellation',
        title: 'Free Cancellation',
        description: 'Up to 48 hours before the experience starts',
      },
      {
        icon: 'local_activity',
        title: 'Mobile Tickets',
        description: 'Get tickets delivered to your Inbox',
      },
    ],
    mustKnow: [
      {
        about1:
          'Unlimited Soft Drink.',
      },
      {
        about1:
          'Unlimited Soup, Starters & Buffet Dinner along with super delicious dessert.',
      },
      {
        about1:
          'DJs, Dance Performances, Fun Games & Spot Prizes.',
      },
      {
        about1:
          'Access to Premium Sofa Seating & Sky-bar Hard drinks are pay-as-you-go.',
      },
    ],

    features: [
      {
        name: "Duration 4 Hours",
        image: "/img/images/svg/cancellation-ico.svg",
      },
      {
        name: "Drinks & Dinner",
        image: "/img/images/svg/bolt-ico.svg",
      },
      { 
	  name: "Entertainment",
	  image: "/img/images/svg/mobile-ico.svg",
	  },
      { 
	  name: "Panjim Goa, India", 
	  image: "/img/images/svg/transfer-ico.svg",
	  },
    ],
    highlights: [
      {
        highlights1:
          'Cruise along Dubai Marina on a classic wooden dhow. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Marina light up with sights like the Cayan Tower, Ain Dubai, and the posh yachts - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live Tanoura dance on Arabic and Hindi tunes and a true Emirati welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'The 3-hour dinner cruise on the Mandovi River in Goa offers an extraordinary experience, blending scenic beauty with culinary delights….',
    overview: [
      { inclusion1: '4-hour mandovi cruise' },
      { inclusion1: 'Buffet dinner' },
      { inclusion1: 'Welcome drinks' },
      { inclusion1: 'Soft drinks & water' },
      { inclusion1: 'Goan dance show' },
      { inclusion1: 'Hotel transfers (optional upgrade)' },
    ],
    thingsToCarry: [
      { exclusion1: 'Parking charges are not included in the package.' },
      {
        exclusion1: 'Additional drinks are not included but can be purchased onboard.',
      },
      {
        exclusion1:
          'Self-travel dinner cruise packages do not include pickup and drop-off services.',
      },
    ],
    needToKnows: [
      {
        needToKnow:
          'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
      },
      {
        needToKnow:
          'Note: Seat allocation is done by the staff on a first-come, first-served basis',
      },
      {
        needToKnow:
          'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
      },
    ],
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7000',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7500',
        adultPrice: '4499',
        kidPrice: '2499',
        adultReportPrice: '3000',
        kidReportPrice: '2000',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
          'Transfers',
        ],
      },
    ],
  },
  {
    priceDetails: {
      regularPrice: '3500',
      discountPrice: '2999',
    },
    cruiseId: 5,
    title: 'GOLDEN HORIZON PACKAGE',
    subTile: 'GOLDEN HORIZON PACKAGE',
    category: 'Cruise',
    type: ['luxury'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }],
    routingUrl: 'book-dinner-cruise-in-goa/details/book-golden-horizon-package-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['4 hours', 'Panjim '],
    oldPrice: '3500',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '2999',
    image: '/img/DinnerCruises/Nauti AMigo/i2.png',
    bannerImgs: [
      '/img/DinnerCruises/Nauti AMigo/i2.webp',
      '/img/DinnerCruises/Nauti AMigo/i6.webp',
      '/img/DinnerCruises/Nauti AMigo/i3.webp',
      '/img/DinnerCruises/Nauti AMigo/i4.webp',
      '/img/DinnerCruises/Nauti AMigo/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '3 Hours Cruising on Mandovi River',
            'Dance Performances & Entertainment on Board',
          ],
        },
        {
          category: 'Meals',
          items: ['Soup, Starter', 'Buffet Dinner (Veg/Non-Veg)', 'Complimentary Dinks & Snacks'],
        },
        {
          category: 'Activities',
          items: ['Sightseeing of Panjim City'],
        },
      ],
    },
    topFeatures: [
      {
        icon: 'event_available',
        title: 'Instant Confirmation',
        description: 'Get your tickets mailed right away',
      },
      {
        icon: 'free_cancellation',
        title: 'Free Cancellation',
        description: 'Up to 48 hours before the experience starts',
      },
      {
        icon: 'local_activity',
        title: 'Mobile Tickets',
        description: 'Get tickets delivered to your Inbox',
      },
    ],
    mustKnow: [
      {
        about1:
          'Unlimited Soft Drink & 5 Complimentary Hard Drinks.',
      },
      {
        about1:
          'Unlimited Soup, Starters, Buffet Dinner & Delicious 	-Desserts.',
      },
      {
        about1:
          'DJs, Dance Performances, Fun Games & Spot Prizes.',
      },
      {
        about1:
          'Access to VIP lounge, Premium Sofa Seating.',
      },
    ],

    features: [
      {
        name: "Duration 4 Hours",
        image: "/img/images/svg/cancellation-ico.svg",
      },
      {
        name: "Drinks & Dinner",
        image: "/img/images/svg/bolt-ico.svg",
      },
      { name: "Entertainment", image: "/img/images/svg/mobile-ico.svg" },
      { name: "Panjim Goa, India", image: "/img/images/svg/transfer-ico.svg" },
    ],
    highlights: [
      {
        highlights1:
          'Cruise along Mandovi River on a classic cruise. This 3-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Atal Setu light up with Panjim sightseeing - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live dance on Bollywood and Hindi tunes and a true Indian welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'The 3-hour dinner cruise on the Mandovi River in Goa offers an extraordinary experience, blending scenic beauty with culinary delights….',
    overview: [
      { inclusion1: '3-hour mandovi cruise' },
      { inclusion1: 'Buffet dinner' },
      { inclusion1: 'Welcome drinks' },
      { inclusion1: 'Soft drinks & water' },
      { inclusion1: 'Goan dance show' },
      { inclusion1: 'Hotel transfers (optional upgrade)' },
    ],
    thingsToCarry: [
      { exclusion1: 'Parking charges are not included in the package.' },
      {
        exclusion1: 'Additional drinks are not included but can be purchased onboard.',
      },
      {
        exclusion1:
          'Self-travel dinner cruise packages do not include pickup and drop-off services.',
      },
    ],
    needToKnows: [
      {
        needToKnow:
          'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
      },
      {
        needToKnow:
          'Note: Seat allocation is done by the staff on a first-come, first-served basis',
      },
      {
        needToKnow:
          'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
      },
    ],
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7000',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7500',
        adultPrice: '4499',
        kidPrice: '2499',
        adultReportPrice: '3000',
        kidReportPrice: '2000',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
          'Transfers',
        ],
      },
    ],
  },
  {
    priceDetails: {
      regularPrice: '4000',
      discountPrice: '3499',
    },
    cruiseId: 5,
    title: 'PLATINUM INFINITY EXPERIENCE',
    subTile: 'PLATINUM INFINITY EXPERIENCE',
    category: 'Cruise',
    type: ['luxury'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }],
    routingUrl: 'book-dinner-cruise-in-goa/details/book-platinum-infinity-experience-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['4 hours', 'Panjim '],
    oldPrice: '4000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '3499',
    image: '/img/DinnerCruises/Nauti AMigo/i3.png',
    bannerImgs: [
      '/img/DinnerCruises/Nauti AMigo/i2.webp',
      '/img/DinnerCruises/Nauti AMigo/i6.webp',
      '/img/DinnerCruises/Nauti AMigo/i3.webp',
      '/img/DinnerCruises/Nauti AMigo/i4.webp',
      '/img/DinnerCruises/Nauti AMigo/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '3 Hours Cruising on Mandovi River',
            'Dance Performances & Entertainment on Board',
          ],
        },
        {
          category: 'Meals',
          items: ['Soups, Starter', 'Buffet Dinner (Veg/Non-Veg)', 'Unlimited Dinks & Snacks'],
        },
        {
          category: 'Activities',
          items: ['Sightseeing of Panjim City'],
        },
      ],
    },
    topFeatures: [
      {
        icon: 'event_available',
        title: 'Instant Confirmation',
        description: 'Get your tickets mailed right away',
      },
      {
        icon: 'free_cancellation',
        title: 'Free Cancellation',
        description: 'Up to 48 hours before the experience starts',
      },
      {
        icon: 'local_activity',
        title: 'Mobile Tickets',
        description: 'Get tickets delivered to your Inbox',
      },
    ],
    mustKnow: [
      {
        about1:
          'Unlimited Soft Drink & Hard Drinks.',
      },
      {
        about1:
          'Unlimited Soup, Starters, Buffet Dinner & Delicious Desserts.',
      },
      {
        about1:
          'DJs, Dance Performances, Fun Games & Spot Prizes.',
      },
      {
        about1:
          'Access to VIP lounge, Premium Sofa Seating.',
      },
    ],

    features: [
      {
        name: "Duration 4 Hours",
        image: "/img/images/svg/cancellation-ico.svg",
      },
      {
        name: "Drinks & Dinner",
        image: "/img/images/svg/bolt-ico.svg",
      },
      { name: "Entertainment", image: "/img/images/svg/mobile-ico.svg" },
      { name: "Panjim Goa, India", image: "/img/images/svg/transfer-ico.svg" },
    ],
    highlights: [
      {
        highlights1:
          'Cruise along Mandovi River on a classic cruise. This 3-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Atal Setu light up with Panjim sightseeing - all set against the backdrop of newly reclaimed islands.',
      },
      {
        highlights1:
          'This cruise ups the game with a live dance on Bollywood and Hindi tunes and a true Indian welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'The 3-hour dinner cruise on the Mandovi River in Goa offers an extraordinary experience, blending scenic beauty with culinary delights….',
    overview: [
      { inclusion1: '3-hour mandovi cruise' },
      { inclusion1: 'Buffet dinner' },
      { inclusion1: 'Welcome drinks' },
      { inclusion1: 'Soft drinks & water' },
      { inclusion1: 'Goan dance show' },
      { inclusion1: 'Hotel transfers (optional upgrade)' },
    ],
    thingsToCarry: [
      { exclusion1: 'Parking charges are not included in the package.' },
      {
        exclusion1: 'Additional drinks are not included but can be purchased onboard.',
      },
      {
        exclusion1:
          'Self-travel dinner cruise packages do not include pickup and drop-off services.',
      },
    ],
    needToKnows: [
      {
        needToKnow:
          'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
      },
      {
        needToKnow:
          'Note: Seat allocation is done by the staff on a first-come, first-served basis',
      },
      {
        needToKnow:
          'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
      },
    ],
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7000',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7500',
        adultPrice: '4499',
        kidPrice: '2499',
        adultReportPrice: '3000',
        kidReportPrice: '2000',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
          'Transfers',
        ],
      },
    ],
  },
  {
    priceDetails: {
      regularPrice: '5000',
      discountPrice: '4499',
    },
    cruiseId: 5,
    title: 'CANDLELIGHT DINNER PACKAGE',
    subTile: 'CANDLELIGHT DINNER PACKAGE',
    category: 'Cruise',
    type: ['luxury'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }],
    routingUrl: 'book-dinner-cruise-in-goa/details/book-candlelight-dinner-package-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '6000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '4499',
    image: '/img/DinnerCruises/Nauti AMigo/i4.png',
    bannerImgs: [
      '/img/DinnerCruises/Nauti AMigo/i2.webp',
      '/img/DinnerCruises/Nauti AMigo/i6.webp',
      '/img/DinnerCruises/Nauti AMigo/i3.webp',
      '/img/DinnerCruises/Nauti AMigo/i4.webp',
      '/img/DinnerCruises/Nauti AMigo/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '3 Hours Cruising on Mandovi River',
            'Dance Performances & Entertainment on Board',
          ],
        },
        {
          category: 'Meals',
          items: ['Soup, Starter', 'Buffet Dinner (Veg/Non-Veg)', 'Unlimited Dinks & Snacks'],
        },
        {
          category: 'Activities',
          items: ['Sightseeing of Panjim City'],
        },
      ],
    },
    topFeatures: [
      {
        icon: 'event_available',
        title: 'Instant Confirmation',
        description: 'Get your tickets mailed right away',
      },
      {
        icon: 'free_cancellation',
        title: 'Free Cancellation',
        description: 'Up to 48 hours before the experience starts',
      },
      {
        icon: 'local_activity',
        title: 'Mobile Tickets',
        description: 'Get tickets delivered to your Inbox',
      },
    ],
    mustKnow: [
      {
        about1:
          'Reserved Table & Romantic Candlelight Setup.',
      },
      {
        about1:
          'Unlimited Soft Drink, Hard Drinks, Cocktails / Mocktails  & One Complimentary Wine / Champagne Bottle.',
      },
      {
        about1:
          'Unlimited Soup, Starters, Buffet Dinner & Delicious Desserts.',
      },
      {
        about1:
          'Romantic Live music by Guitarist, Dedicated Dance Performances, Access to VIP lounge, Premium Sofa Seating & Sky-bar.',
      },
    ],

    features: [
      {
        name: "Duration 4 Hours",
        image: "/img/images/svg/cancellation-ico.svg",
      },
      {
        name: "Drinks & Dinner",
        image: "/img/images/svg/bolt-ico.svg",
      },
      { name: "Entertainment", image: "/img/images/svg/mobile-ico.svg" },
      { name: "Panjim Goa, India", image: "/img/images/svg/transfer-ico.svg" },
    ],
    highlights: [
      {
        highlights1:
          'Cruise along Mandovi River on a classic cruise. This 3-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'See the Atal Setu light up with Panjim sightseeing - all set against the backdrop of newly reclaimed islands.',
      },
      {
        highlights1:
          'This cruise ups the game with a live dance on Bollywood and Hindi tunes and a true Indian welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'The 4-hour dinner cruise on the Mandovi River in Goa offers an extraordinary experience, blending scenic beauty with culinary delights….',
    overview: [
      { inclusion1: '2-hour mandovi cruise' },
      { inclusion1: 'Buffet dinner' },
      { inclusion1: 'Welcome drinks' },
      { inclusion1: 'Soft drinks & water' },
      { inclusion1: 'Goan dance show' },
      { inclusion1: 'Hotel transfers (optional upgrade)' },
    ],
    thingsToCarry: [
      { exclusion1: 'Parking charges are not included in the package.' },
      {
        exclusion1: 'Additional drinks are not included but can be purchased onboard.',
      },
      {
        exclusion1:
          'Self-travel dinner cruise packages do not include pickup and drop-off services.',
      },
    ],
    needToKnows: [
      {
        needToKnow:
          'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
      },
      {
        needToKnow:
          'Note: Seat allocation is done by the staff on a first-come, first-served basis',
      },
      {
        needToKnow:
          'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
      },
    ],
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7000',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7500',
        adultPrice: '4499',
        kidPrice: '2499',
        adultReportPrice: '3000',
        kidReportPrice: '2000',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
          'Transfers',
        ],
      },
    ],
  },
  {
    priceDetails: {
      regularPrice: '1000',
      discountPrice: '699',
    },
    cruiseId: 5,
    title: 'LUXURY SUNDOWNER TRIP',
    subTile: 'LUXURY SUNDOWNER TRIP',
    category: 'Cruise',
    type: ['luxury'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }],
    routingUrl: 'book-dinner-cruise-in-goa/details/book-luxury-sundowner-trip-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '2000',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 1000,
    reportPriceWithTransport: 750,
    currentPrice: '999',
    image: '/img/DinnerCruises/Nauti AMigo/i5.png',
    bannerImgs: [
      '/img/DinnerCruises/Nauti AMigo/i2.webp',
      '/img/DinnerCruises/Nauti AMigo/i6.webp',
      '/img/DinnerCruises/Nauti AMigo/i3.webp',
      '/img/DinnerCruises/Nauti AMigo/i4.webp',
      '/img/DinnerCruises/Nauti AMigo/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '2 Hours Cruising on Mandovi River',
            'Dance Performances & Entertainment on Board',
          ],
        },
        {
          category: 'Meals',
          items: ['Dinks & Snacks'],
        },
        {
          category: 'Activities',
          items: ['Sightseeing of Panjim City'],
        },
      ],
    },
    topFeatures: [
      {
        icon: 'event_available',
        title: 'Instant Confirmation',
        description: 'Get your tickets mailed right away',
      },
      {
        icon: 'free_cancellation',
        title: 'Free Cancellation',
        description: 'Up to 48 hours before the experience starts',
      },
      {
        icon: 'local_activity',
        title: 'Mobile Tickets',
        description: 'Get tickets delivered to your Inbox',
      },
    ],
    mustKnow: [
      {
        about1:
          'Triple-Deck Luxury Vessel: Nauti Amigo is a five-star luxury cruise spread across three decks, each designed to provide a unique experience.',
      },
      {
        about1:
          'Exclusive VVIP lounge with sofa seating, Open-Air Dance Floor, a bar counter, advanced lighting and sound systems, a DJ booth, and separate restrooms for men and women, ensuring utmost comfort and exclusivity.',
      },
      {
        about1:
          'Gourmet Dining Experience: Guests can indulge in a sumptuous dinner accompanied soups, starters & unlimited alcoholic and non-alcoholic beverages.',
      },
      {
        about1:
          'Embark on the Nauti Amigo Luxury Dinner Cruise to enjoy an evening of elegance, entertainment, and exquisite dining as you sail along the serene Mandovi River.',
      },
    ],

    features: [
      {
        name: "Duration 2 Hours",
        image: "/img/images/svg/cancellation-ico.svg",
      },
      {
        name: "Panjim Goa, India",
        image: "/img/images/svg/bolt-ico.svg",
      },
      { name: "Drinks & Snacks", image: "/img/images/svg/mobile-ico.svg" },
      { name: "Entertainment", image: "/img/images/svg/transfer-ico.svg" },
    ],
    highlights: [
      {
        highlights1:
          'Cruise along Mandovi River on a classic cruise. This 2-hour cruise has it all: sightseeing, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not!',
      },
      {
        highlights1:
          'Cruise along Mandovi River on a classic cruise. This 2-hour cruise has it all: sightseeing, and live entertainment.',
      },
      {
        highlights1:
          'This cruise ups the game with a live dance on Bollywood and Hindi tunes and a true Indian welcome with drinks and dates..',
      },
    ],
    overviewDesc:
      'The 2-hour cruise on the Mandovi River in Goa offers an extraordinary experience, blending scenic beauty with culinary delights….',
    overview: [
      { inclusion1: '2-hour mandovi cruise' },
      { inclusion1: 'Snacks' },
      { inclusion1: 'Welcome drinks' },
      { inclusion1: 'Soft drinks & water' },
      { inclusion1: 'Goan dance show' },
    ],
    thingsToCarry: [
      { exclusion1: 'Parking charges are not included in the package.' },
      {
        exclusion1: 'Additional drinks are not included but can be purchased onboard.',
      },
      {
        exclusion1:
          'Self-travel as cruise packages do not include pickup and drop-off services.',
      },
    ],
    needToKnows: [
      {
        needToKnow:
          'Tip: For the best views, secure a spot near the railings of the cruise. You will get an unobstructed view of the mandovi river and the city landmarks.',
      },
      {
        needToKnow:
          'Note: Seat allocation is done by the staff on a first-come, first-served basis',
      },
      {
        needToKnow:
          'The pick-up time for the cruise with transfer is scheduled between 7-8pm, varying by area (Arpora Junction, Baga, Calangute & Candolim). The exact pick-up time will be confirmed by 5pm on the tour day.',
      },
    ],
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7000',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7500',
        adultPrice: '4499',
        kidPrice: '2499',
        adultReportPrice: '3000',
        kidReportPrice: '2000',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
          'Transfers',
        ],
      },
    ],
  },
  {
    priceDetails: {
      regularPrice: '1.5L',
      discountPrice: '1.5L',
    },
    cruiseId: 5,
    title: 'PRIVATE EVENTS',
    subTile: 'PRIVATE EVENTS',
    category: 'Cruise',
    type: ['luxury'],
    specialEvents: [{ date: '2025-12-31', title: 'New Year\'s Eve', navigateTo: 'https://nautiamigo.com/book-new-year-party-cruise-2026/' }],
    routingUrl: 'book-dinner-cruise-in-goa/details/book-private-events-cruise-in-goa',
    rating: '4.8',
    reviews: '3.8K',
    mobilePackageDesc: ['2 hours', 'Panjim '],
    oldPrice: '149999/Hr',
    booked: '4M+',
    buttonText: 'Book this activity & get 20% off',
    reportPrice: 3000,
    reportPriceWithTransport: 750,
    currentPrice: '129999/Hr',
    image: '/img/DinnerCruises/Nauti AMigo/i6.png',
    bannerImgs: [
      '/img/DinnerCruises/Nauti AMigo/i2.webp',
      '/img/DinnerCruises/Nauti AMigo/i6.webp',
      '/img/DinnerCruises/Nauti AMigo/i3.webp',
      '/img/DinnerCruises/Nauti AMigo/i4.webp',
      '/img/DinnerCruises/Nauti AMigo/i5.webp',
    ],
    priceIncludes: {
      title: 'Price Includes',
      sections: [
        {
          category: 'Ticket',
          items: [
            '2 Hours Cruising on Mandovi River',
            'Dance Performances & Entertainment on Board',
          ],
        },
        {
          category: 'Meals',
          items: ['Starter', 'Buffet Dinner (Veg/Non-Veg)', 'Complimentary Dinks & Snacks'],
        },
        {
          category: 'Activities',
          items: ['Sightseeing of Panjim City'],
        },
      ],
    },
    topFeatures: [
      {
        icon: 'event_available',
        title: 'Instant Confirmation',
        description: 'Get your tickets mailed right away',
      },
      {
        icon: 'free_cancellation',
        title: 'Free Cancellation',
        description: 'Up to 48 hours before the experience starts',
      },
      {
        icon: 'local_activity',
        title: 'Mobile Tickets',
        description: 'Get tickets delivered to your Inbox',
      },
    ],
    mustKnow: [
      {
        about1:
          'Triple-Deck Luxury Vessel: Nauti Amigo is a five-star luxury cruise spread across three decks, each designed to provide a unique experience.',
      },
      {
        about1:
          'Exclusive VVIP lounge with sofa seating, Open deck, a bar counter, advanced lighting and sound systems, a DJ booth, and separate restrooms for men and women, ensuring utmost comfort and exclusivity.',
      },
      {
        about1:
          'Gourmet Dining Experience: Guests can indulge in a sumptuous dinner accompanied soups, starters & unlimited alcoholic and non-alcoholic beverages.',
      },
      {
        about1:
          'Embark on the Nauti Amigo Luxury Dinner Cruise to enjoy an evening of elegance, entertainment, and exquisite dining as you sail along the serene Mandovi River.',
      },
    ],

    features: [
      {
        name: "Duration 2 Hours",
        image: "/img/images/svg/cancellation-ico.svg",
      },
      {
        name: "Panjim Goa, India",
        image: "/img/images/svg/bolt-ico.svg",
      },
      { name: "Meals & Drinks", image: "/img/images/svg/mobile-ico.svg" },
      { name: "Transport", image: "/img/images/svg/transfer-ico.svg" },
    ],
    highlights: [
      {
        highlights1:
          'Cruise along Mandovi River on a classic cruise. This 2-hour cruise has it all: sightseeing, dinner, and live entertainment.',
      },
      {
        highlights1:
          'Feast on an all-you-can-eat buffet with Asian delights, Indian curries, and desserts - the buffet for everyone, veg or not (Not included)!',
      },
      {
        highlights1:
          'See the Atal Setu light up with Panjim sightseeing - all set against the backdrop of newly reclaimed islands',
      },
      {
        highlights1:
          'This cruise ups the game with a live dance on Bollywood and Hindi tunes and a true Indian welcome with drinks and dates.',
      },
    ],
    overviewDesc:
      'The 2-hour dinner cruise on the Mandovi River in Goa offers an extraordinary experience, blending scenic beauty with culinary delights….',
    overview: [
      { inclusion1: '2-hour mandovi cruise' },
      { inclusion1: 'Buffet dinner' },
      { inclusion1: 'Welcome drinks' },
      { inclusion1: 'Soft drinks & water' },
      { inclusion1: 'Goan dance show' },
      { inclusion1: 'Hotel transfers (optional upgrade)' },
    ],
    thingsToCarry: [
      { exclusion1: 'Parking charges are not included in the package.' },
      {
        exclusion1: 'Additional drinks are not included but can be purchased onboard.',
      },
      {
        exclusion1:
          'Self-travel dinner cruise packages do not include pickup and drop-off services.',
      },
    ],
    needToKnows: [
      {
        needToKnow:
          'Tip: For the best views, secure a spot near the railings of the Dhow. You will get an unobstructed view of the marina and the city landmarks.',
      },
      {
        needToKnow:
          'Note: Seat allocation is done by the staff on a first-come, first-served basis',
      },
      {
        needToKnow:
          'The pick-up time for the Dhow cruise with transfer is scheduled between 6-7pm, varying by area (limited to Deira, Bur Dubai, and Sheikh Zayed Road till Barsha). The exact pick-up time will be confirmed by 5pm on the tour day.',
      },
    ],
    transport: [
      {
        title: 'Without Transport',
        isSelected: true,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7000',
        adultPrice: '3999',
        kidPrice: '1999',
        adultReportPrice: '3000',
        kidReportPrice: '1500',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
        ],
      },
      {
        title: 'With Transport',
        isSelected: false,
        originalamt: '4999',
        discountedamt: '3999',
        kidAmt: '2500',
        regularPrice: '7500',
        adultPrice: '4499',
        kidPrice: '2499',
        adultReportPrice: '3000',
        kidReportPrice: '2000',
        desc: [
          'Access to all decks',
          '3-hour sailing',
          'Unlimited starters.',
          'Unlimited buffet dinner.',
          'Unlimited drinks.',
          'Unlimited entertainment.',
          'Transfers',
        ],
      },
    ],
  },
 ];

function renderCruiseCardsCarousel(cruises) {
  const container = $("#cruise-container");

  cruises.forEach((offer) => {
    const card = document.createElement("div");
    card.className = "cruise-card";

    card.innerHTML = `
        <div class="card">
          <div class="flex flex-row-custom g-1">
            <div class="slider">
              <div navigation="true" pagination="true" autoplay="true" loop="true">
                <div>
                  <div class="cardImg">
                    <img src="${offer.image}" alt="" />
                  </div>
                </div>
              </div>
            </div>
  
            <div class="info">
              <span class="rating">
                <strong>
                  <svg id="star-full" viewBox="0 0 475.075 475.075">
                    <path
                      data-card-section="Reviews"
                      fill="#FFA500"
                      d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 
                        c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 
                        l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 
                        c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 
                        c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 
                        c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"
                    ></path>
                  </svg>
                  ${offer.rating}
                </strong>
                (${offer.reviews})
              </span>
              <h3>${offer.title}</h3>
              <div class="detail-content d-ele">
                <ul>
                  ${offer.mustKnow
        .map((item) => `<li>${item.about1}</li>`)
        .join("")}
                </ul>
              </div>
              <div class="show-full-info">
                <div class="link link-cursor">
                  Call for more details
                  <img src="/img/images/svg/arrow-ico.svg" alt="" />
                </div>
              </div>
            </div>
  
            <div class="payments">
              <div class="amount" style="display: flex; gap: 10px;white-space: nowrap; align-items: center;">
              <div style="display: flex; gap: 4px;white-space: nowrap; align-items: center;">
                <span style="text-decoration: line-through;font-size: 12px;font-weight: 400; ">
                  ₹${offer?.priceDetails?.regularPrice}
                </span>
                <h3 style="display: flex; gap: 10px;">
                  ₹${offer?.priceDetails?.discountPrice}
                  </h3>
              </div>
                  <div class="discount-badge-web">
                    SAVED ${calculateDiscount(offer?.priceDetails?.regularPrice, offer?.priceDetails?.discountPrice)}%!
                  </div>
              </div>
              <div class="flex flex-column mobile-reverse">
                <div class="button-group">
                  <button class="primary-button" onclick="window.location.href='${getBaseUrl()}${offer.routingUrl}'">
                    Book Online
                  </button>
                  <button class="secondary-button m-ele" onclick="openWhatsApp('+919324105081')">
                    Book on WhatsApp
                  </button>
                </div>
                <div class="features">
                  ${offer.features
        .map(
          (feature) => `
                      <div class="feature-item">
                        <img src="${feature.image}" alt="${feature.name}" />
                        <span>${feature.name}</span>
                      </div>
                    `
        )
        .join("")}
                </div>
                <div class="show-full-info dotted-border">
                  <div (click)="openWhatsApp('+919324105081')" class="whatsapp link link-cursor">
                <img src="/img/dinnercruise/whatsapp_icon.png" alt="WhatsApp icon" />

                Book on WhatsApp
                <img src="/img/images/svg/arrow-ico.svg" alt="" />
              </div>
                </div>            
              </div>
            </div>
          </div>
        </div>
      `;

    container.append(card);
  });


  container.owlCarousel({
    items: 1,            // show 1 card at a time
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
  });
}
function renderCruiseCards(cruises, containerId = "cruise-container") {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return;
  }

  cruises.forEach((offer) => {
    const card = document.createElement("div");
    card.className = "cruise-card";

    card.innerHTML = `
        <div class="card">
          <div class="flex flex-row-custom g-1">
            <div class="slider">
              <div navigation="true" pagination="true" autoplay="true" loop="true">
                <div>
                  <div class="cardImg">
                    <img src="${offer.image}" alt="" />
                  </div>
                </div>
              </div>
            </div>
  
            <div class="info">
              <span class="rating">
                <strong>
                  <svg id="star-full" viewBox="0 0 475.075 475.075">
                    <path
                      data-card-section="Reviews"
                      fill="#FFA500"
                      d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 
                        c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 
                        l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 
                        c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 
                        c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 
                        c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"
                    ></path>
                  </svg>
                  ${offer.rating}
                </strong>
                (${offer.reviews})
              </span>
              <h3>${offer.title}</h3>
              <div class="detail-content d-ele">
                <ul>
                  ${offer.mustKnow
        .map((item) => `<li>${item.about1}</li>`)
        .join("")}
                </ul>
              </div>
              <div class="show-full-info">
                <div class="link link-cursor">
                  Call for more details
                  <img src="/img/images/svg/arrow-ico.svg" alt="" />
                </div>
              </div>
            </div>
  
            <div class="payments">
              <div class="amount">
                <h3 class="price-div">
                <span class="old-price"> ₹${offer?.priceDetails?.regularPrice}</span>
              <span class="amount-price">₹${offer.currentPrice}</span>
                  <div class="tag"> SAVED 15%</div>
                </h3>
              </div>
              <div class="flex flex-column mobile-reverse">
                <div class="button-group">
                  <button class="primary-button" onclick="window.location.href='tel:9324105081'">
                    Call Now
                  </button>
                  <button class="secondary-button m-ele" onclick="openWhatsApp('+919324105081')">
                    Book on WhatsApp
                  </button>
                </div>
                <div class="features">
                  ${offer.features
        .map(
          (feature) => `
                      <div class="feature-item">
                        <img src="${feature.image}" alt="${feature.name}" />
                        <span>${feature.name}</span>
                      </div>
                    `
        )
        .join("")}
                </div>
                <div class="show-full-info dotted-border">
                  <div onclick="openWhatsApp('+919324105081')" class="whatsapp link link-cursor">
                <img src="/img/dinnercruise/whatsapp_icon.png" alt="WhatsApp icon" />

                Book on WhatsApp
                <img src="/img/images/svg/arrow-ico.svg" alt="" />
              </div>
                </div>            
              </div>
            </div>
          </div>
        </div>
      `;

    container.appendChild(card);
  });
}

// Initialize
renderCruiseCardsCarousel(offer);