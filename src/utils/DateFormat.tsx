 export function DateFormat(dateString:string) {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions= { day: 'numeric', month: 'long' }; 
    return date.toLocaleDateString('en-US', options);
  }