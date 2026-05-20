document.addEventListener('DOMContentLoaded', function () {
  const calendarEvents = [
    {
      date: '2026-05-02',
      startTime: '9:00 AM',
      endTime: '12:00 PM',
      type: 'Parks',
      title: 'Family Nature Walk at Riverbend Park',
      location: 'Riverbend Park, 9060 Indiantown Road, Jupiter FL',
      description: 'A guided outdoor program highlighting native habitats, wildlife observation, and family-friendly recreation.',
      source: 'PBC Parks & Recreation'
    },
    {
      date: '2026-05-03',
      startTime: '2:00 PM',
      endTime: '3:30 PM',
      type: 'Libraries',
      title: 'Author Talk and Community Reading Hour',
      location: 'Palm Beach County Library System - Main Library, 3650 Summit Blvd, West Palm Beach FL',
      description: 'A library-hosted community program for readers, families, and lifelong learners.',
      source: 'Library System'
    },
    {
      date: '2026-05-06',
      startTime: '10:00 AM',
      endTime: '11:30 AM',
      type: 'ERM',
      title: 'Wetlands Restoration Volunteer Orientation',
      location: 'Winding Waters Natural Area, 6161 Haverhill Road N, West Palm Beach FL',
      description: 'Learn how volunteers support restoration, monitoring, and stewardship at county natural areas.',
      source: 'Environmental Resources Management'
    },
    {
      date: '2026-05-08',
      startTime: '12:00 PM',
      endTime: '1:00 PM',
      type: 'Virtual',
      title: 'Hurricane Preparedness Lunch and Learn',
      location: 'Virtual Meeting',
      description: 'A countywide online session with preparedness tips, evacuation resources, and emergency information.',
      source: 'Public Safety',
      virtualUrl: '#'
    },
    {
      date: '2026-05-10',
      startTime: '8:30 AM',
      endTime: '10:30 AM',
      type: 'ERM',
      title: 'Beach Cleanup and Coastal Stewardship Day',
      location: 'Ocean Inlet Park, 6990 N Ocean Blvd, Ocean Ridge FL',
      description: 'A hands-on coastal cleanup and education event focused on protecting beaches and marine habitats.',
      source: 'Environmental Resources Management'
    },
    {
      date: '2026-05-14',
      startTime: '5:30 PM',
      endTime: '7:00 PM',
      type: 'Libraries',
      title: 'Technology Help Night',
      location: 'Palm Beach County Library System - Hagen Ranch Road Branch, 14350 Hagen Ranch Road, Delray Beach FL',
      description: 'Residents can get help navigating digital services, online resources, and common device questions.',
      source: 'Library System'
    },
    {
      date: '2026-05-16',
      startTime: '9:00 AM',
      endTime: '1:00 PM',
      type: 'Community',
      title: 'Community Services Resource Fair',
      location: 'Vista Center, 2300 N Jog Road, West Palm Beach FL',
      description: 'A one-stop event connecting residents with county services, nonprofit partners, and assistance programs.',
      source: 'Community Services'
    },
    {
      date: '2026-05-19',
      startTime: '6:00 PM',
      endTime: '7:30 PM',
      type: 'Parks',
      title: 'Sunset Fitness in the Park',
      location: 'Okeeheelee Park, 7715 Forest Hill Blvd, West Palm Beach FL',
      description: 'A free outdoor wellness class designed for residents of varying fitness levels.',
      source: 'PBC Parks & Recreation'
    },
    {
      date: '2026-05-21',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      type: 'Virtual',
      title: 'Ask Extension: Florida-Friendly Landscaping',
      location: 'Virtual Meeting',
      description: 'A live online session about sustainable landscaping, irrigation, and native plants.',
      source: 'Cooperative Extension',
      virtualUrl: '#'
    },
    {
      date: '2026-05-24',
      startTime: '11:00 AM',
      endTime: '2:00 PM',
      type: 'Parks',
      title: 'Memorial Weekend Family Fun Day',
      location: 'John Prince Park, 2700 6th Avenue S, Lake Worth Beach FL',
      description: 'A county park event with recreation activities, information tables, and family programming.',
      source: 'PBC Parks & Recreation'
    },
    {
      date: '2026-05-07',
      startTime: '5:30 PM',
      endTime: '7:00 PM',
      type: 'Airports',
      title: 'Airport Master Plan Open House',
      location: 'Palm Beach International Airport, 1000 James L Turnage Blvd, West Palm Beach FL',
      description: 'A public open house sharing airport planning updates, project information, and opportunities for community input.',
      source: 'Department of Airports'
    },
    {
      date: '2026-05-11',
      startTime: '10:00 AM',
      endTime: '2:00 PM',
      type: 'Animals',
      title: 'Pet Adoption and Licensing Day',
      location: 'Animal Care and Control, 7100 Belvedere Road, West Palm Beach FL',
      description: 'Meet adoptable pets, learn about licensing, and connect with county animal care resources.',
      source: 'Animal Care and Control'
    },
    {
      date: '2026-05-13',
      startTime: '9:00 AM',
      endTime: '12:00 PM',
      type: 'Veterans',
      title: 'Veterans Services Benefits Clinic',
      location: '810 Datura Street, West Palm Beach FL',
      description: 'A resource clinic helping veterans and families connect with benefits, claims assistance, and county support services.',
      source: 'Veterans Services'
    },
    {
      date: '2026-05-18',
      startTime: '1:00 PM',
      endTime: '2:30 PM',
      type: 'Extension',
      title: 'Backyard Vegetable Gardening Workshop',
      location: 'Cooperative Extension, 559 N Military Trail, West Palm Beach FL',
      description: 'A hands-on workshop covering seasonal planting, soil health, irrigation, and Florida-friendly growing practices.',
      source: 'Cooperative Extension'
    },
    {
      date: '2026-05-22',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      type: 'Community',
      title: 'PBC TV Studio Tour',
      location: 'PBC TV Channel 20, 301 N Olive Ave, West Palm Beach FL',
      description: 'A behind-the-scenes look at county video production, public meetings coverage, and community programming.',
      source: 'Public Affairs'
    },
    {
      date: '2026-05-05',
      startTime: '10:00 AM',
      endTime: '1:00 PM',
      type: 'Parks',
      title: 'Dubois Pioneer Home Historical Tours',
      location: 'See event details',
      description: 'Parks and Recreation public program imported from the PBC Calendar Directory.',
      source: 'PBC Parks & Recreation',
      detailsUrl: 'https://discover.pbcgov.org/parks/Lists/Calendar/AllEvents.aspx'
    },
    {
      date: '2026-05-05',
      startTime: '10:00 AM',
      endTime: '1:00 PM',
      type: 'Parks',
      title: 'Open Gym Pickleball at Westgate Recreation Center',
      location: 'See event details',
      description: 'Parks and Recreation public program imported from the PBC Calendar Directory.',
      source: 'PBC Parks & Recreation',
      detailsUrl: 'https://discover.pbcgov.org/parks/Lists/Calendar/AllEvents.aspx'
    },
    {
      date: '2026-05-06',
      startTime: '8:00 AM',
      endTime: '11:00 AM',
      type: 'ERM',
      title: 'Volunteer Event - Jupiter Inlet Lighthouse Outstanding Natural Area, Jupiter',
      location: 'Jupiter Inlet Lighthouse Outstanding Natural Area, Jupiter FL',
      description: 'Environmental Resources Management volunteer event imported from the PBC Calendar Directory.',
      source: 'Environmental Resources Management',
      detailsUrl: 'https://discover.pbc.gov/erm/Lists/Calendar/AllEvents.aspx'
    },
    {
      date: '2026-05-06',
      startTime: '2:00 PM',
      endTime: '5:00 PM',
      type: 'Extension',
      title: 'Rentwise',
      location: 'See event details',
      description: 'Cooperative Extension class imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-15',
      startTime: '8:00 AM',
      endTime: '4:00 PM',
      type: 'Extension',
      title: 'GI-BMP',
      location: 'Clayton Hutcheson Agricultural Center, 559 N Military Trail, West Palm Beach FL 33415',
      description: 'Cooperative Extension class imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-15',
      startTime: '9:00 AM',
      endTime: '1:00 PM',
      type: 'Extension',
      title: 'Homebuyer Session 1',
      location: 'See event details',
      description: 'Cooperative Extension class imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-15',
      startTime: '1:30 PM',
      endTime: '2:30 PM',
      type: 'ERM',
      title: 'Natural Areas Management Advisory Committee Meeting',
      location: 'See event details',
      description: 'Environmental Resources Management meeting imported from the PBC Calendar Directory.',
      source: 'Environmental Resources Management',
      detailsUrl: 'https://discover.pbc.gov/erm/Lists/Calendar/AllEvents.aspx'
    },
    {
      date: '2026-05-16',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      type: 'Extension',
      title: 'Garden Talks - Palms in the Home Landscape',
      location: 'Acreage Branch Library, 15801 Orange Blvd, Loxahatchee FL 33470',
      description: 'Cooperative Extension horticulture program imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-17',
      startTime: '3:30 PM',
      endTime: '4:30 PM',
      type: 'Extension',
      title: 'Heat-Resilient Harvests: Cultivating Summer Crops in South Florida',
      location: 'Jupiter Branch Library, 705 Military Trail, Jupiter FL 33458',
      description: 'Cooperative Extension horticulture program imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-18',
      startTime: '2:00 PM',
      endTime: '3:00 PM',
      type: 'Extension',
      title: 'Gardening for Wildlife',
      location: 'Greenacres Branch Library, 3750 Jog Rd, Greenacres FL 33467',
      description: 'Cooperative Extension horticulture program imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-19',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      type: 'Extension',
      title: 'Landscape Design DIY',
      location: 'Wellington Branch Library, 1951 Royal Fern Dr, Wellington FL 33414',
      description: 'Cooperative Extension horticulture program imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-20',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      type: 'Extension',
      title: '50+ Growing and Using Edible Flowers',
      location: 'Jupiter Community Center, 200 Military Trail, Jupiter FL 33458',
      description: 'Cooperative Extension horticulture program imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-22',
      startTime: '9:00 AM',
      endTime: '1:00 PM',
      type: 'Extension',
      title: 'Homebuyer Session 2',
      location: 'See event details',
      description: 'Cooperative Extension class imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-23',
      startTime: '8:00 AM',
      endTime: '11:00 AM',
      type: 'ERM',
      title: 'Volunteer Event - Limestone Creek Natural Area, Jupiter',
      location: 'Limestone Creek Natural Area, Jupiter FL',
      description: 'Environmental Resources Management volunteer event imported from the PBC Calendar Directory.',
      source: 'Environmental Resources Management',
      detailsUrl: 'https://discover.pbc.gov/erm/Lists/Calendar/AllEvents.aspx'
    },
    {
      date: '2026-05-23',
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      type: 'Extension',
      title: 'Composting 101: Turn Yard & Kitchen Waste into Garden Gold',
      location: 'Gardens Branch Library, 11303 Campus Drive, Palm Beach Gardens FL 33410',
      description: 'Cooperative Extension horticulture program imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-26',
      startTime: '5:00 PM',
      endTime: '6:00 PM',
      type: 'Extension',
      title: 'Flower Gardening and Edible Blossoms',
      location: 'West Boynton Branch Library, 9451 Jog Road, Boynton Beach FL 33437',
      description: 'Cooperative Extension horticulture program imported from the PBC Calendar Directory.',
      source: 'Cooperative Extension',
      detailsUrl: 'https://discover.pbc.gov/coextension/Lists/EventsCalendar/calendar.aspx'
    },
    {
      date: '2026-05-27',
      startTime: '8:00 AM',
      endTime: '11:00 AM',
      type: 'ERM',
      title: 'Volunteer Event - Winding Waters Natural Area, West Palm Beach',
      location: 'Winding Waters Natural Area, West Palm Beach FL',
      description: 'Environmental Resources Management volunteer event imported from the PBC Calendar Directory.',
      source: 'Environmental Resources Management',
      detailsUrl: 'https://discover.pbc.gov/erm/Lists/Calendar/AllEvents.aspx'
    },
    {
      date: '2026-05-30',
      startTime: '8:00 AM',
      endTime: '11:00 AM',
      type: 'ERM',
      title: 'Volunteer Event - Delray Oaks Natural Area, Delray Beach',
      location: 'Delray Oaks Natural Area, Delray Beach FL',
      description: 'Environmental Resources Management volunteer event imported from the PBC Calendar Directory.',
      source: 'Environmental Resources Management',
      detailsUrl: 'https://discover.pbc.gov/erm/Lists/Calendar/AllEvents.aspx'
    },
    {
      date: '2026-05-01',
      startTime: '12:00 PM',
      endTime: '11:59 PM',
      type: 'Campaign',
      title: 'GYGO Hunt 2026',
      location: 'Online Activity',
      description: 'A free app-based Get Your Green On hunt throughout May with missions focused on mental health resources, trauma-informed care, and community awareness.',
      source: 'Birth to 22',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm',
      virtualUrl: 'https://join.goosechase.com/23f296ba-15e1-401a-8115-4ba14599f897'
    },
    {
      date: '2026-05-02',
      startTime: '9:00 AM',
      endTime: '3:00 PM',
      type: 'Campaign',
      title: 'Mental Health Family Day Camp',
      location: 'Okeeheelee Nature Center, 7715 Forest Hill Blvd, West Palm Beach FL 33413',
      description: 'A family day camp blending therapeutic workshops, outdoor activities, and wellness experiences for youth and parents.',
      source: 'Palm Beach County Youth Services Department',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm'
    },
    {
      date: '2026-05-02',
      startTime: '11:00 AM',
      endTime: '3:00 PM',
      type: 'Campaign',
      title: 'Get Your Green On 2026: Rooted in Resilience',
      location: 'Delray Beach Community Center, 50 NW 1st Ave, Delray Beach FL 33444',
      description: 'A community-centered wellness event with resources, mental health activities, youth and family engagement, music, movement, and creative expression.',
      source: 'Birth to 22',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm'
    },
    {
      date: '2026-05-06',
      startTime: '9:30 AM',
      endTime: '11:30 AM',
      type: 'Campaign',
      title: 'Game Changer: Developing Healthy Video Game Habits in Youth',
      location: 'Zoom',
      description: 'A virtual training from Youth Services focused on supporting healthy video game habits in youth.',
      source: 'PBC Youth Services - Education & Training Center',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm',
      virtualUrl: '#'
    },
    {
      date: '2026-05-12',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      type: 'Campaign',
      title: 'Shinrin-Yoku Nature Bathing',
      location: '110 Natures Way, Royal Palm Beach FL 33411',
      description: 'A guided ERM nature-bathing walk designed to help participants slow down, connect with nature, and focus their senses.',
      source: 'PBC Environmental Resources Management',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm'
    },
    {
      date: '2026-05-15',
      startTime: '6:30 PM',
      endTime: '9:30 PM',
      type: 'Campaign',
      title: 'Mental Health Awareness Night',
      location: 'Roger Dean Chevrolet Stadium, 4751 Main St, Jupiter FL 33458',
      description: 'A Get Your Green On mental health awareness night with the Palm Beach Cardinals, supporting NAMI Palm Beach County.',
      source: 'Get Your Green On',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm'
    },
    {
      date: '2026-05-16',
      startTime: '8:00 AM',
      endTime: '11:00 AM',
      type: 'Campaign',
      title: 'Resiliency in Motion Cultural Corridor Ride',
      location: 'Catherine Strong Park, 1500 SW 6th St, Delray Beach FL',
      description: 'An intergenerational bike and golf-cart ride through Delray Beach focused on movement, culture, community resilience, and neighborhood assets.',
      source: 'Birth to 22',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm'
    },
    {
      date: '2026-05-28',
      startTime: '3:30 PM',
      endTime: '5:30 PM',
      type: 'Campaign',
      title: 'Annual Butterfly Release',
      location: '22455 Boca Rio Road, Boca Raton FL 33433',
      description: 'A community gathering honoring mental health support through a symbolic butterfly release during Mental Health Awareness Month.',
      source: 'Faulk Center for Counseling',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm'
    },
    {
      date: '2026-05-30',
      startTime: '10:30 AM',
      endTime: '1:30 PM',
      type: 'Campaign',
      title: 'Arts & Wellness Community Fair',
      location: '601 Lake Avenue, Lake Worth Beach FL 33460',
      description: 'A relaxed open-air morning of creativity, movement, and connection in support of wellness and mental health awareness.',
      source: 'Support Not Stigma & Cultural Council for PBC',
      campaign: 'Get Your Green On',
      image: 'images/calendar/featured/get-your-green-on.jpg',
      detailsUrl: 'https://pbcbirthto22.com/gygo/events2026.htm'
    }
  ];

  const calendarGrid = document.getElementById('calendarEventsGrid');
  const calendarMonthGrid = document.getElementById('calendarMonthGrid');
  const calendarFeaturedEvent = document.getElementById('calendarFeaturedEvent');
  const calendarSelectedDateHeading = document.getElementById('calendarSelectedDateHeading');
  const calendarResultsCount = document.getElementById('calendarResultsCount');
  const calendarEventCount = document.getElementById('calendarEventCount');
  const calendarTypeButtons = document.querySelectorAll('[data-calendar-type]');
  const calendarSearchInput = document.getElementById('countyEventSearch');
  const calendarSearchReset = document.getElementById('countyEventSearchReset');
  const calendarPager = document.querySelector('[data-calendar-pager]');
  const calendarMonthHeading = document.getElementById('calendarMonthHeading');
  const calendarPreviousMonth = document.getElementById('calendarPreviousMonth');
  const calendarNextMonth = document.getElementById('calendarNextMonth');
  const calendarYear = 2026;
  const firstCalendarMonth = 0;
  const lastCalendarMonth = 11;
  const resultsPageSize = 8;
  let displayedMonth = 4;
  let selectedDate = null;
  let selectedType = 'all';
  let searchTerm = '';
  let currentResultsPage = 1;
  let featuredIndex = 0;
  let featuredScope = 'month';
  let featuredTimer = null;
  let featuredPaused = false;
  const featuredIntervalMs = 7000;

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[character]));
  }

  function toDate(value) {
    return new Date(`${value}T00:00:00`);
  }

  function toCalendarDate(date, time) {
    const [clock, period] = time.split(' ');
    const [hourValue, minuteValue] = clock.split(':').map(Number);
    let hour = hourValue;
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    return new Date(`${date}T${String(hour).padStart(2, '0')}:${String(minuteValue).padStart(2, '0')}:00-04:00`);
  }

  function formatCalendarDate(date) {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  }

  function createIcsHref(event) {
    const start = formatCalendarDate(toCalendarDate(event.date, event.startTime));
    const end = formatCalendarDate(toCalendarDate(event.date, event.endTime));
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Palm Beach County//Countywide Events//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${event.date}-${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}@pbc.gov`,
      `DTSTAMP:${formatCalendarDate(new Date())}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${event.title}`,
      `LOCATION:${event.location}`,
      `DESCRIPTION:${event.description}`,
      'URL:https://pbc.gov/cal/event/fullcalendar?ViewType=P',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
  }

  function isVirtualEvent(event) {
    const location = event.location.toLowerCase();
    return event.type.toLowerCase() === 'virtual' || location.includes('virtual') || location.includes('zoom') || location.includes('online');
  }

  function hasPhysicalLocation(event) {
    const location = String(event.location || '').toLowerCase();
    return event.location && !isVirtualEvent(event) && !location.includes('see event details');
  }

  function prefersAppleMaps() {
    return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  }

  function createMapHref(event, provider = prefersAppleMaps() ? 'apple' : 'google') {
    const query = encodeURIComponent(event.location);
    return provider === 'apple'
      ? `https://maps.apple.com/?q=${query}`
      : `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  function renderLocationAction(event) {
    if (isVirtualEvent(event)) {
      return `<a href="${event.virtualUrl || '#'}" class="calendar-location-action" aria-label="Join online for ${escapeHtml(event.title)}"><i class="fa-solid fa-video" aria-hidden="true"></i><span>Join Online</span></a>`;
    }
    if (!hasPhysicalLocation(event)) return '';
    return `<a href="${createMapHref(event)}" class="calendar-location-action" target="_blank" rel="noopener" aria-label="Get directions to ${escapeHtml(event.title)}"><i class="fa-solid fa-location-arrow" aria-hidden="true"></i><span>Get Directions</span></a>`;
  }

  function splitLocation(value) {
    const location = String(value || '').trim();
    if (!location) return { name: 'Location', address: '' };
    if (/^\d/.test(location) || isVirtualEvent({ type: '', location })) return { name: location, address: '' };

    const [name, ...addressParts] = location.split(',');
    return {
      name: name.trim(),
      address: addressParts.join(',').trim()
    };
  }

  function renderLocationMeta(event) {
    const location = splitLocation(event.location);
    return `
      <span class="calendar-location-meta">
        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
        <span class="calendar-location-lines">
          <span class="calendar-location-name">${escapeHtml(location.name)}</span>
          ${location.address ? `<span class="calendar-location-address">${escapeHtml(location.address)}</span>` : ''}
        </span>
      </span>
    `;
  }

  function getEventStatusPatterns() {
    return [
      /\*?\b(?:CANCELLED|CANCELED)(?:\s+as of\s+[\d./-]+)?\*?/gi,
      /\*?\bPOSTPONED(?:\s+(?:to|until|as of|on)\s+[\d./-]+)?\*?/gi,
      /\*?\bRESCHEDULED(?:\s+to\s+[\d./-]+)?\*?(?:\s+on\s+[\d./-]+)?/gi
    ];
  }

  function formatEventStatusLabel(value) {
    return String(value || '')
      .replace(/\*/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/cancelled|canceled/i, 'Cancelled')
      .replace(/postponed/i, 'Postponed')
      .replace(/rescheduled/i, 'Rescheduled');
  }

  function getEventStatus(value) {
    const text = String(value || '');

    for (const pattern of getEventStatusPatterns()) {
      const match = text.match(pattern);
      if (match) return formatEventStatusLabel(match[0]);
    }

    return '';
  }

  function cleanEventStatusText(value) {
    let text = String(value || '');

    getEventStatusPatterns().forEach(pattern => {
      text = text.replace(pattern, '');
    });

    return text
      .replace(/\s+on\s+[\d./-]+\s+/i, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+([.,;:])/g, '$1')
      .replace(/\.\s*\./g, '.')
      .replace(/^\s*[.,;:-]\s*/, '')
      .trim();
  }

  function normalizeEventStatus(event) {
    const status = getEventStatus(`${event.title || ''} ${event.description || ''}`);
    if (!status) return;

    event.status = status;
    event.title = cleanEventStatusText(event.title);
    event.description = cleanEventStatusText(event.description);
  }

  calendarEvents.forEach(normalizeEventStatus);

  function getStatusClass(event) {
    return String(event.status || '').toLowerCase().split(' ')[0];
  }

  function renderStatusBadge(event) {
    if (!event.status) return '';
    return `<span class="calendar-status-badge status-${escapeHtml(getStatusClass(event))}">${escapeHtml(event.status)}</span>`;
  }

  function isCancelledEvent(event) {
    return ['cancelled', 'canceled'].includes(getStatusClass(event));
  }

  function renderEventActions(event) {
    if (isCancelledEvent(event)) return '';

    const detailsHref = event.detailsUrl || 'https://pbc.gov/cal/event/fullcalendar?ViewType=P';

    return `
      <div class="calendar-event-actions">
        <a href="${detailsHref}" class="btn btn-pbc btn-sm">View Details</a>
        <a href="${createIcsHref(event)}" download="${event.date}-${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics" class="btn btn-pbc-outline btn-sm">Add to Calendar</a>
        ${renderLocationAction(event)}
      </div>
    `;
  }

  function eventMatchesType(event) {
    if (selectedType === 'all') return true;
    if (selectedType === 'virtual') return isVirtualEvent(event);
    if (selectedType === 'campaign') return Boolean(event.campaign) || event.type.toLowerCase() === 'campaign';
    if (selectedType === 'community') return ['community', 'airports', 'animals', 'veterans', 'extension'].includes(event.type.toLowerCase());
    return event.type.toLowerCase() === selectedType;
  }

  function eventMatchesSearch(event) {
    if (!searchTerm) return true;

    const searchableText = [
      event.title,
      event.description,
      event.source,
      event.type,
      event.location,
      event.campaign,
      event.status
    ].join(' ').toLowerCase();

    return searchableText.includes(searchTerm);
  }

  function getDisplayedMonthDate() {
    return new Date(calendarYear, displayedMonth, 1);
  }

  function getDisplayedMonthName(format = 'long') {
    return getDisplayedMonthDate().toLocaleString('en-US', { month: format });
  }

  function getDisplayedMonthLabel() {
    return `${getDisplayedMonthName()} ${calendarYear}`;
  }

  function getVisibleEvents() {
    return calendarEvents.filter(event => {
      const eventDate = toDate(event.date);
      return eventDate.getMonth() === displayedMonth && eventDate.getFullYear() === calendarYear && eventMatchesType(event) && eventMatchesSearch(event);
    }).sort((firstEvent, secondEvent) => toCalendarDate(firstEvent.date, firstEvent.startTime) - toCalendarDate(secondEvent.date, secondEvent.startTime));
  }

  function getEventsForDate(dateValue) {
    if (!dateValue) return getVisibleEvents();
    return getVisibleEvents().filter(event => event.date === dateValue);
  }

  function getResultsHeading() {
    if (selectedDate) return formatDateHeading(selectedDate);
    if (searchTerm && selectedType === 'all') return `Search results for "${calendarSearchInput.value.trim()}"`;
    if (selectedType === 'all') return `All ${getDisplayedMonthLabel()} events`;
    const activeButton = document.querySelector(`[data-calendar-type="${selectedType}"]`);
    const typeLabel = activeButton ? activeButton.textContent : selectedType;
    return searchTerm ? `${typeLabel} results for "${calendarSearchInput.value.trim()}"` : `${typeLabel} events in ${getDisplayedMonthLabel()}`;
  }

  function getResultsCountText(count) {
    if (count === 0) return 'There are <span class="calendar-results-count-number">no</span> events';
    if (count === 1) return 'There is <span class="calendar-results-count-number">1</span> event';
    return `There are <span class="calendar-results-count-number">${count}</span> events`;
  }

  function createPagerButton(label, page, options = {}) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = options.className || 'department-pager-btn';
    button.textContent = label;

    if (options.icon) {
      button.innerHTML = options.icon;
    }

    if (options.disabled) {
      button.disabled = true;
    }

    if (options.current) {
      button.classList.add('is-current');
      button.setAttribute('aria-current', 'page');
    }

    if (options.label) {
      button.setAttribute('aria-label', options.label);
    }

    button.addEventListener('click', () => {
      if (button.disabled || currentResultsPage === page) return;
      currentResultsPage = page;
      renderCalendar();
      calendarSelectedDateHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return button;
  }

  function createPagerEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.className = 'department-pager-ellipsis';
    ellipsis.textContent = '...';
    ellipsis.setAttribute('aria-hidden', 'true');
    return ellipsis;
  }

  function getPageNumbers(totalPages) {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentResultsPage <= 4) {
      return [1, 2, 3, 4, 'ellipsis-end', totalPages];
    }

    if (currentResultsPage >= totalPages - 3) {
      return [1, 'ellipsis-start', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, 'ellipsis-start', currentResultsPage - 1, currentResultsPage, currentResultsPage + 1, 'ellipsis-end', totalPages];
  }

  function renderPager(totalPages) {
    if (!calendarPager) return;

    calendarPager.innerHTML = '';
    calendarPager.hidden = totalPages <= 1;

    if (totalPages <= 1) return;

    calendarPager.appendChild(createPagerButton('', Math.max(1, currentResultsPage - 1), {
      className: 'department-pager-text',
      disabled: currentResultsPage === 1,
      icon: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i><span>Prev</span>',
      label: 'Previous page'
    }));

    getPageNumbers(totalPages).forEach(page => {
      if (typeof page === 'string') {
        calendarPager.appendChild(createPagerEllipsis());
        return;
      }

      calendarPager.appendChild(createPagerButton(String(page), page, {
        current: page === currentResultsPage,
        label: `Page ${page}`
      }));
    });

    calendarPager.appendChild(createPagerButton('', Math.min(totalPages, currentResultsPage + 1), {
      className: 'department-pager-text',
      disabled: currentResultsPage === totalPages,
      icon: '<span>Next</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
      label: 'Next page'
    }));
  }

  function formatDateHeading(dateValue) {
    return toDate(dateValue).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  function getTodayDateValue() {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  }

  function getFeaturedPools(visibleEvents) {
    const todayDateValue = getTodayDateValue();
    const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];
    const todayEvents = visibleEvents.filter(event => event.date === todayDateValue);

    return {
      month: visibleEvents,
      today: todayEvents,
      selected: selectedEvents
    };
  }

  function getFeaturedScopeLabel(scope) {
    if (scope === 'today') return 'Today';
    if (scope === 'selected') return 'Selected Date';
    return 'This Month';
  }

  function getFeaturedPool(visibleEvents) {
    const pools = getFeaturedPools(visibleEvents);
    if (selectedDate && pools.selected.length) return { scope: 'selected', events: pools.selected };
    if (featuredScope === 'today') return { scope: 'today', events: pools.today };
    return { scope: 'month', events: pools.month };
  }

  function stopFeaturedTimer() {
    if (!featuredTimer) return;
    window.clearInterval(featuredTimer);
    featuredTimer = null;
  }

  function startFeaturedTimer(poolLength) {
    stopFeaturedTimer();
    if (featuredPaused || poolLength <= 1) return;
    featuredTimer = window.setInterval(() => {
      featuredIndex = (featuredIndex + 1) % poolLength;
      renderCalendar();
    }, featuredIntervalMs);
  }

  function renderFeaturedEmpty(scope) {
    if (!calendarFeaturedEvent) return;
    calendarFeaturedEvent.innerHTML = `
      <div class="calendar-featured-content calendar-featured-empty">
        <div class="calendar-featured-topline">
          <span class="calendar-featured-kicker">${escapeHtml(getFeaturedScopeLabel(scope))}</span>
          <div class="calendar-featured-controls" aria-label="Featured event controls">
            <button type="button" class="calendar-featured-scope${featuredScope === 'today' ? ' is-active' : ''}" data-featured-scope="today">Today</button>
            <button type="button" class="calendar-featured-scope${featuredScope === 'month' ? ' is-active' : ''}" data-featured-scope="month">Month</button>
            <button type="button" class="calendar-featured-arrow" data-featured-direction="prev" aria-label="Previous featured event"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
            <button type="button" class="calendar-featured-arrow calendar-featured-pause" data-featured-pause aria-label="Pause featured event rotation" aria-pressed="false"><i class="fa-solid fa-pause" aria-hidden="true"></i></button>
            <button type="button" class="calendar-featured-arrow" data-featured-direction="next" aria-label="Next featured event"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
          </div>
        </div>
        <h3>No featured events found</h3>
        <p>Try the monthly spotlight, another category, or a different search term.</p>
      </div>
    `;
    attachFeaturedControls(0);
  }

  function renderFeaturedEvent(event, poolLength, scope) {
    if (!calendarFeaturedEvent || !event) return;
    const eventDate = toDate(event.date);
    const month = eventDate.toLocaleString('en-US', { month: 'short' });
    const day = String(eventDate.getDate()).padStart(2, '0');
    const statusClass = getStatusClass(event);
    const imageSrc = event.image || 'images/departments/hub/department-hero.jpg';
    const imageAlt = event.campaign ? `${event.campaign} event graphic` : 'Palm Beach County community event';

    calendarFeaturedEvent.innerHTML = `
      <div class="calendar-featured-image${event.status ? ' has-status' : ''}"${event.status ? ` data-event-status="${escapeHtml(statusClass)}"` : ''}>
        <img src="${imageSrc}" alt="${escapeHtml(imageAlt)}">
        ${renderStatusBadge(event)}
        <span class="calendar-featured-date"><strong>${month}</strong><span>${day}</span></span>
      </div>
      <div class="calendar-featured-content${event.status ? ' has-status' : ''}"${event.status ? ` data-event-status="${escapeHtml(statusClass)}"` : ''}>
        <div class="calendar-featured-topline">
          <span class="calendar-featured-kicker">${escapeHtml(getFeaturedScopeLabel(scope))} | ${featuredIndex + 1} of ${poolLength}</span>
          <div class="calendar-featured-controls" aria-label="Featured event controls">
            <button type="button" class="calendar-featured-scope${featuredScope === 'today' ? ' is-active' : ''}" data-featured-scope="today">Today</button>
            <button type="button" class="calendar-featured-scope${featuredScope === 'month' ? ' is-active' : ''}" data-featured-scope="month">Month</button>
            <button type="button" class="calendar-featured-arrow" data-featured-direction="prev" aria-label="Previous featured event"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
            <button type="button" class="calendar-featured-arrow calendar-featured-pause" data-featured-pause aria-label="${featuredPaused ? 'Resume featured event rotation' : 'Pause featured event rotation'}" aria-pressed="${featuredPaused ? 'true' : 'false'}"><i class="fa-solid ${featuredPaused ? 'fa-play' : 'fa-pause'}" aria-hidden="true"></i></button>
            <button type="button" class="calendar-featured-arrow" data-featured-direction="next" aria-label="Next featured event"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
          </div>
        </div>
        <h3>${escapeHtml(event.title)}</h3>
        <p>${escapeHtml(event.description)}</p>
        <div class="calendar-featured-meta">
          <span><i class="fa-solid fa-clock" aria-hidden="true"></i>${escapeHtml(event.startTime)} - ${escapeHtml(event.endTime)}</span>
          ${renderLocationMeta(event)}
        </div>
        ${renderEventActions(event)}
      </div>
    `;
    attachFeaturedControls(poolLength);
  }

  function attachFeaturedControls(poolLength) {
    calendarFeaturedEvent.querySelectorAll('[data-featured-scope]').forEach(button => {
      button.addEventListener('click', () => {
        featuredScope = button.getAttribute('data-featured-scope');
        selectedDate = null;
        currentResultsPage = 1;
        featuredIndex = 0;
        renderCalendar();
      });
    });

    calendarFeaturedEvent.querySelectorAll('[data-featured-direction]').forEach(button => {
      button.disabled = poolLength <= 1;
      button.addEventListener('click', () => {
        const direction = button.getAttribute('data-featured-direction');
        featuredIndex = direction === 'prev'
          ? (featuredIndex - 1 + poolLength) % poolLength
          : (featuredIndex + 1) % poolLength;
        renderCalendar();
      });
    });

    const pauseButton = calendarFeaturedEvent.querySelector('[data-featured-pause]');
    if (pauseButton) {
      pauseButton.disabled = poolLength <= 1;
      pauseButton.addEventListener('click', () => {
        featuredPaused = !featuredPaused;
        renderCalendar();
      });
    }
  }

  function renderDayEvents() {
    const events = selectedDate ? getEventsForDate(selectedDate) : getVisibleEvents();
    const totalPages = Math.max(1, Math.ceil(events.length / resultsPageSize));
    calendarSelectedDateHeading.textContent = getResultsHeading();
    if (calendarResultsCount) {
      calendarResultsCount.innerHTML = getResultsCountText(events.length);
    }

    if (!events.length) {
      currentResultsPage = 1;
      renderPager(0);
      calendarGrid.innerHTML = `
        <div class="calendar-no-events">
          <span class="calendar-no-events-icon" aria-hidden="true"><i class="fa-solid fa-calendar-check"></i></span>
          <div><h4>No events match your search</h4><p>Try another highlighted date, category, or keyword.</p></div>
        </div>
      `;
      return;
    }

    currentResultsPage = Math.min(currentResultsPage, totalPages);
    const start = (currentResultsPage - 1) * resultsPageSize;
    const pageEvents = events.slice(start, start + resultsPageSize);

    calendarGrid.innerHTML = pageEvents.map(event => {
      const eventDate = toDate(event.date);
      const month = eventDate.toLocaleString('en-US', { month: 'short' });
      const day = String(eventDate.getDate()).padStart(2, '0');
      const year = eventDate.getFullYear();

      return `
        <article class="calendar-event-card${event.status ? ' has-status' : ''}" data-event-type="${escapeHtml(event.type.toLowerCase())}"${event.status ? ` data-event-status="${escapeHtml(getStatusClass(event))}"` : ''}>
          <div class="calendar-event-date"><span class="calendar-event-month">${month}</span><span class="calendar-event-day">${day}</span><span class="calendar-event-year">${year}</span></div>
          <div class="calendar-event-content">
            <div class="calendar-event-title-row">
              <h4>${escapeHtml(event.title)}</h4>
              ${renderStatusBadge(event)}
            </div>
            ${event.description ? `<p>${escapeHtml(event.description)}</p>` : ''}
            <div class="calendar-featured-meta">
              <span><i class="fa-solid fa-clock" aria-hidden="true"></i>${escapeHtml(event.startTime)} - ${escapeHtml(event.endTime)}</span>
              ${renderLocationMeta(event)}
            </div>
            ${renderEventActions(event)}
          </div>
        </article>
      `;
    }).join('');
    renderPager(totalPages);
  }

  function renderMonthGrid() {
    const visibleEvents = getVisibleEvents();
    const eventsByDate = visibleEvents.reduce((map, event) => {
      map[event.date] = map[event.date] || [];
      map[event.date].push(event);
      return map;
    }, {});
    const firstDay = new Date(calendarYear, displayedMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, displayedMonth + 1, 0).getDate();
    const previousMonthDays = new Date(calendarYear, displayedMonth, 0).getDate();
    const monthLabel = getDisplayedMonthLabel();
    const cells = [];

    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(dayName => {
      cells.push(`<span class="calendar-weekday">${dayName}</span>`);
    });

    for (let i = firstDay - 1; i >= 0; i -= 1) {
      cells.push(`<span class="calendar-day-cell is-muted">${previousMonthDays - i}</span>`);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const dateValue = `${calendarYear}-${String(displayedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = eventsByDate[dateValue] || [];
      const isSelected = selectedDate === dateValue;
      const eventLabel = dayEvents.length === 1 ? '1 event' : `${dayEvents.length} events`;
      cells.push(`
        <button type="button" class="calendar-day-cell${dayEvents.length ? ' has-events' : ''}${isSelected ? ' is-selected' : ''}" data-calendar-date="${dateValue}" aria-label="${getDisplayedMonthName()} ${day}, ${dayEvents.length ? eventLabel : 'no events'}">
          <span>${day}</span>${dayEvents.length ? `<small>${dayEvents.length}</small>` : ''}
        </button>
      `);
    }

    while ((cells.length - 7) % 7 !== 0) {
      const nextDay = (cells.length - 7 + 1) - (firstDay + daysInMonth);
      cells.push(`<span class="calendar-day-cell is-muted">${nextDay}</span>`);
    }

    calendarMonthGrid.innerHTML = cells.join('');
    calendarMonthGrid.querySelectorAll('[data-calendar-date]').forEach(button => {
      button.addEventListener('click', () => {
        selectedDate = button.getAttribute('data-calendar-date');
        currentResultsPage = 1;
        featuredIndex = 0;
        renderCalendar();
      });
    });
    const countLabel = visibleEvents.length === 1 ? 'event' : 'events';
    calendarEventCount.textContent = `${getDisplayedMonthName()} has ${visibleEvents.length} ${countLabel}.`;

    if (calendarMonthGrid) {
      calendarMonthGrid.setAttribute('aria-label', `${monthLabel} event calendar`);
    }

    if (calendarMonthHeading) {
      calendarMonthHeading.textContent = monthLabel;
    }

    if (calendarPreviousMonth) {
      calendarPreviousMonth.disabled = displayedMonth <= firstCalendarMonth;
    }

    if (calendarNextMonth) {
      calendarNextMonth.disabled = displayedMonth >= lastCalendarMonth;
    }
  }

  function renderCalendar() {
    const visibleEvents = getVisibleEvents();
    const featuredPool = getFeaturedPool(visibleEvents);
    featuredIndex = featuredPool.events.length ? featuredIndex % featuredPool.events.length : 0;
    const featuredEvent = featuredPool.events[featuredIndex];

    if (featuredEvent) {
      renderFeaturedEvent(featuredEvent, featuredPool.events.length, featuredPool.scope);
      startFeaturedTimer(featuredPool.events.length);
    } else {
      stopFeaturedTimer();
      renderFeaturedEmpty(featuredPool.scope);
    }

    renderMonthGrid();
    renderDayEvents();
  }

  calendarTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedType = button.getAttribute('data-calendar-type');
      selectedDate = null;
      currentResultsPage = 1;
      featuredIndex = 0;
      calendarTypeButtons.forEach(currentButton => currentButton.classList.toggle('is-active', currentButton === button));
      renderCalendar();
    });
  });

  if (calendarSearchInput) {
    calendarSearchInput.addEventListener('input', () => {
      searchTerm = calendarSearchInput.value.trim().toLowerCase();
      selectedDate = null;
      currentResultsPage = 1;
      featuredIndex = 0;
      renderCalendar();
    });
  }

  if (calendarSearchReset) {
    calendarSearchReset.addEventListener('click', () => {
      if (calendarSearchInput) {
        calendarSearchInput.value = '';
        calendarSearchInput.focus();
      }

      searchTerm = '';
      selectedType = 'all';
      selectedDate = null;
      currentResultsPage = 1;
      featuredScope = 'month';
      featuredIndex = 0;
      calendarTypeButtons.forEach(button => button.classList.toggle('is-active', button.getAttribute('data-calendar-type') === 'all'));
      renderCalendar();
    });
  }

  if (calendarPreviousMonth) {
    calendarPreviousMonth.addEventListener('click', () => {
      if (displayedMonth <= firstCalendarMonth) return;
      displayedMonth -= 1;
      selectedDate = null;
      currentResultsPage = 1;
      featuredIndex = 0;
      renderCalendar();
    });
  }

  if (calendarNextMonth) {
    calendarNextMonth.addEventListener('click', () => {
      if (displayedMonth >= lastCalendarMonth) return;
      displayedMonth += 1;
      selectedDate = null;
      currentResultsPage = 1;
      featuredIndex = 0;
      renderCalendar();
    });
  }

  renderCalendar();
});
