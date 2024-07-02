import querystring from "querystring"


function formatDate(dateString: string) {
    return dateString.replace(/-|:|\.\d\d\d/g, '');
}
export const generateGoogleCalendarLink = (title: string, startTime: string) => {

    //if (!endTime) {
        const start = new Date(startTime);
        const end = new Date(start.getTime() + 60 * 60 * 1000); // Add 1 hour
       const endTime = end.toISOString();
    //}

    const baseUrl = 'https://calendar.google.com/calendar/render';
    const query = querystring.stringify({
        action: 'TEMPLATE',
        text: title,
       //location: location,
       // details: description,
        dates: `${formatDate(startTime)}/${formatDate(endTime)}`,
        sf: true,
        output: 'xml',
    });
    return `${baseUrl}?${query}`;
}

