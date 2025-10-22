// Google Sheets utility for fetching events data using public-google-sheets-parser
// Make sure to make the spreadsheet public and published to web

import PublicGoogleSheetsParser from 'public-google-sheets-parser';

const SPREADSHEET_ID = '1taURjBwtLdPMbQn7Nc2SZKLx0CfA-he58LOJfaGSAtI';
const SHEET_NAME = 'Лист1';

// Helper function to extract date from string format like "Date(2025,8,27)"
const extractDateFromString = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') return '';

  const match = dateStr.match(/Date\((\d{4}),(\d+),(\d+)\)/);
  if (match) {
    const year = parseInt(match[1]);
    const month = parseInt(match[2]) + 1; // JavaScript months are 0-indexed, so add 1
    const day = parseInt(match[3]);
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
  }
  return dateStr;
};

// Helper function to extract time from string format like "Date(1899,11,30,19,0,0)"
const extractTimeFromString = (timeStr) => {
  if (!timeStr || typeof timeStr !== 'string') return '';

  const match = timeStr.match(/Date\(\d+,\d+,\d+,(\d+),(\d+),(\d+)\)/);
  if (match) {
    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  return timeStr;
};

// Helper function to convert Telegram Markdown to HTML
const convertTelegramMarkdownToHTML = (text) => {
  if (!text) return '';

  return text
    // Convert *word* to <strong>word</strong> (bold)
    .replace(/\*([^*\n]+?)\*/g, '<strong>$1</strong>')
    // Convert [link text](url) to <a href="url">link text</a>
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
    // Convert @username to Telegram links
    .replace(/@([A-Za-z0-9_]+)/g, '<a href="https://t.me/$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">@$1</a>')
    // Convert line breaks to <br>
    .replace(/\n/g, '<br>')
    // Convert bullet points
    .replace(/🔄/g, '•');
};

// Fetch events data from Google Sheets using public parser
export const fetchEventsData = async () => {
  try {
    const parser = new PublicGoogleSheetsParser(SPREADSHEET_ID);
    // Use default sheet instead of named sheet (first sheet)
    const data = await parser.parse();

    if (!data || data.length === 0) {
      console.warn('No data from Google Sheets - returning fallback message');
      return 'FALLBACK_TO_TELEGRAM';
    }

    // Parse the data structure from Google Sheets
    // The parser uses the first row as headers, so the data comes as objects
    // where keys are the values from the first row
    // Based on the actual structure, we need to map the values correctly
    
    const arrayData = [];
    
    for (const row of data) {
      // Get the object values in the order they appear
      const values = Object.values(row);
      
      // Based on the actual Google Sheets structure:
      // values[0] = ID (Column A)
      // values[1] = some number (Column B) 
      // values[2] = price/amount (Column C)
      // values[3] = title (Column D)
      // values[4] = description (Column E)
      // values[5] = start date (Column F)
      // values[6] = start time (Column G)  
      // values[7] = couple price (Column H)
      
      const eventId = String(values[0] || '').trim(); // Column A - ID
      const title = String(values[3] || '').trim(); // Column D - название
      const description = String(values[4] || '').trim(); // Column E - описание
      const rawDate = String(values[5] || '').trim(); // Column F - дата начала
      const rawTime = String(values[6] || '').trim(); // Column G - время начала
      const price = String(values[2] || '').trim(); // Column C - цена (аванс)
      const couplePrice = String(values[7] || '').trim(); // Column H - цена за пару
      
      // Extract and format date and time
      const date = extractDateFromString(rawDate);
      const time = extractTimeFromString(rawTime);
      
      // Skip empty rows
      if (!eventId || !title) {
        continue;
      }
      
      // Clean description
      const cleanDescription = convertTelegramMarkdownToHTML(description);
      
      // Create array format: [id, title, description, empty, date, time, price, couplePrice]
      arrayData.push([
        eventId,
        title,
        cleanDescription,
        '', // Empty column D for compatibility
        date,
        time,
        price,
        couplePrice
      ]);
    }

    console.log('Successfully fetched events from Google Sheets:', arrayData.length, 'rows');
    
    // Если нет валидных событий, показываем fallback
    if (arrayData.length === 0) {
      console.warn('No valid events found in Google Sheets - returning fallback message');
      return 'FALLBACK_TO_TELEGRAM';
    }
    
    return arrayData;
  } catch (error) {
    console.error('Error fetching events data from Google Sheets:', error);
    return 'FALLBACK_TO_TELEGRAM';
  }
};

// Transform events data to standardized format for columns A,B,C,E,F,G,H
export const transformEventsData = (rawEvents) => {
  return rawEvents.map(row => {
    // Map specific columns: A=ID, B=Title, C=Description, E=Date, F=Time, G=Price, H=CouplePrice
    // Note: arrays are 0-indexed, so A=0, B=1, C=2, D=3, E=4, F=5, G=6, H=7
    const eventId = row[0] || ''; // Column A - ID
    const title = row[1] || ''; // Column B - название
    let description = row[2] || ''; // Column C - описание
    const date = row[4] || ''; // Column E - дата (skip D=3)
    const time = row[5] || ''; // Column F - время
    const price = row[6] || ''; // Column G - цена
    const couplePrice = row[7] || ''; // Column H - цена за пару

    // Replace @ with https://t.me/ in description
    description = description.replace(/@(\w+)/g, 'https://t.me/$1');

    // Skip empty events
    if (!eventId || !title) {
      return null;
    }

    const standardEvent = {
      id: eventId,
      title: title,
      description: description,
      date: date,
      time: time,
      price: price,
      couplePrice: couplePrice,
      location: 'Москва, 1-й Басманный пер. д.2а', // Default location
      type: 'Мероприятие',
      instructor: '', // Remove default instructor - will be extracted from description if needed
      status: 'active',
      registrationLink: `https://t.me/resursnie_bot?start=${eventId}`,
      image: '/images/events/default.jpg'
    };

    // Parse and format date
    if (standardEvent.date) {
      try {
        // Try different date formats
        let dateObj;

        // Try DD.MM.YYYY format
        if (standardEvent.date.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)) {
          const [day, month, year] = standardEvent.date.split('.');
          dateObj = new Date(year, month - 1, day);
        }
        // Try YYYY-MM-DD format
        else if (standardEvent.date.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
          dateObj = new Date(standardEvent.date);
        }
        // Try MM/DD/YYYY format
        else if (standardEvent.date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
          dateObj = new Date(standardEvent.date);
        }
        // Try other common formats
        else {
          dateObj = new Date(standardEvent.date);
        }

        if (!isNaN(dateObj.getTime())) {
          standardEvent.formattedDate = dateObj.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });
          standardEvent.dateObject = dateObj;
        } else {
          standardEvent.formattedDate = standardEvent.date;
        }
      } catch (e) {
        console.error('Error parsing date:', standardEvent.date, e);
        standardEvent.formattedDate = standardEvent.date;
      }
    }

    return standardEvent;
  }).filter(event => event !== null); // Remove null entries
};

// Get upcoming events (future dates only)
export const getUpcomingEvents = async () => {
  try {
    const rawEvents = await fetchEventsData();
    
    // Check if we got the fallback signal
    if (rawEvents === 'FALLBACK_TO_TELEGRAM') {
      return 'FALLBACK_TO_TELEGRAM';
    }
    
    const transformedEvents = transformEventsData(rawEvents);

    // Filter for upcoming events (only future dates)
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set to start of today for better comparison

    const upcomingEvents = transformedEvents.filter(event => {
      if (!event.dateObject) {
        console.log(`Event "${event.title}" has no valid date, excluding from upcoming events`);
        return false; // Exclude events without valid dates
      }

      // Set event date to start of day for comparison
      const eventDate = new Date(event.dateObject);
      eventDate.setHours(0, 0, 0, 0);

      const isFuture = eventDate >= now;
      if (!isFuture) {
        console.log(`Event "${event.title}" on ${event.formattedDate} is in the past, excluding`);
      }

      return isFuture;
    });
    
    // Sort by date (earliest first)
    upcomingEvents.sort((a, b) => {
      if (!a.dateObject || !b.dateObject) return 0;
      return a.dateObject - b.dateObject;
    });

    // Filter regular events - show only the first "Регулярное занятие" after today
    const filteredEvents = [];
    let hasRegularEvent = false;

    for (const event of upcomingEvents) {
      // Check if this is a regular event
      const isRegularEvent = event.title && event.title.includes('Регулярное занятие');
      
      if (isRegularEvent) {
        // Only add the first regular event found (they are already sorted by date)
        if (!hasRegularEvent) {
          filteredEvents.push(event);
          hasRegularEvent = true;
        }
        // Skip other regular events
      } else {
        // Add all non-regular events
        filteredEvents.push(event);
      }
    }

    console.log(`Found ${upcomingEvents.length} upcoming events, filtered to ${filteredEvents.length} (keeping only next regular event)`);
    
    // Если нет предстоящих событий, показываем fallback
    if (filteredEvents.length === 0) {
      console.warn('No upcoming events found - returning fallback message');
      return 'FALLBACK_TO_TELEGRAM';
    }
    
    return filteredEvents;
  } catch (error) {
    console.error('=== DEBUG: Error in getUpcomingEvents:', error);
    return 'FALLBACK_TO_TELEGRAM';
  }
};

// Get events by type
export const getEventsByType = async (eventType) => {
  const events = await getUpcomingEvents();
  if (!eventType) return events;

  return events.filter(event =>
    event.type.toLowerCase().includes(eventType.toLowerCase())
  );
};

export default {
  fetchEventsData,
  transformEventsData,
  getUpcomingEvents,
  getEventsByType
};