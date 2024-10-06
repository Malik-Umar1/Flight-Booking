 export function DateFormat(dateString:string) {
    const date = new Date(dateString);
    
    const options = { day: 'numeric', month: 'long' }; 
    return date.toLocaleDateString('en-US', options);
  }