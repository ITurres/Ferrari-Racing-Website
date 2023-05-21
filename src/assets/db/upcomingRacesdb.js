const countryImageSrcPath = 'src/assets/media/upcoming-races-country-img/';
const upcomingRacesdb = {
  bahrain: {
    img: {
      src: `${countryImageSrcPath}circuit-bahrain.jpg`,
      alt: 'Scuderia Ferrari Bahrain 2020'
    },
    circuit: {
      name: 'Bahrain Grand Prix',
      about:
        'Scuderia Ferrari heads home from the opening round of the season in Bahrain with 12 points.'
    },
    date: {
      dateTime: '03 - 05 March',
      timeStamp: '2023-03-05'
    }
  },
  australia: {
    img: {
      src: `${countryImageSrcPath}circuit-australia.jpg`,
      alt: 'Scuderia Ferrari Season 2022'
    },
    circuit: {
      name: 'Australian Grand Prix',
      about:
        'Scuderia Ferrari leaves Australia without any points, having clearly demonstrated that it has made progress in terms of race pace.'
    },
    date: {
      dateTime: '31 March - 02 April',
      timeStamp: '2023-03-31'
    }
  },
  miami: {
    img: {
      src: `${countryImageSrcPath}circuit-miami.jpg`,
      alt: 'Scuderia Ferrari miami 2021'
    },
    circuit: {
      name: 'Miami Grand Prix',
      about:
        'This was not the easiest of Sundays for Scuderia Ferrari, which comes away from the United States with a fifth place for Sainz.'
    },
    date: {
      dateTime: '05 - 07 May',
      timeStamp: '2023-05-05'
    }
  },
  hungary: {
    img: {
      src: `${countryImageSrcPath}circuit-hungary.jpg`,
      alt: 'Scuderia Ferrari Budapest 2020'
    },
    circuit: {
      name: 'Hungarian Grand Prix',
      about:
        'The track usually has little grip when cars start running on Friday, but improves bit by bit as the track rubbers in.'
    },
    date: {
      dateTime: '21 - 23 July',
      timeStamp: '2023-07-21'
    }
  },
  saoPaulo: {
    img: {
      src: `${countryImageSrcPath}circuit-sao-paulo.jpg`,
      alt: 'Brazilian grand prix 2023'
    },
    circuit: {
      name: 'Sao Paulo Grand Prix',
      about:
        'The track runs anti-clockwise, which is not the norm, thus putting additional strain on the drivers neck.'
    },
    date: {
      dateTime: '03 - 05 November',
      timeStamp: '2023-11-03'
    }
  },
  abuDhabi: {
    img: {
      src: `${countryImageSrcPath}circuit-abu-dhabi.jpg`,
      alt: 'Scuderia Ferrari Yas Marina 2020'
    },
    circuit: {
      name: 'Abu Dhabi Grand Prix',
      about:
        'In Abu Dhabi, one also has to manage the fact that track temperature gradually drops over the course of the race.'
    },
    date: {
      dateTime: '24 - 26 November',
      timeStamp: '2023-11-24'
    }
  }
};

export default upcomingRacesdb;
