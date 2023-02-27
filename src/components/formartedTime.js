export function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);
    const millisecondsLeft = milliseconds % 1000;
  
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(millisecondsLeft).padStart(2, '0');
  
    return `${minutes}:${formattedSeconds}`;
  }
  