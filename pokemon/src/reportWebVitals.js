import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics(metric) {
  // Mengirimkan metrik ke server analitik
}

function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onPerfEntry(getCLS, (metric) => sendToAnalytics(metric));
    onPerfEntry(getFID, (metric) => sendToAnalytics(metric));
    onPerfEntry(getLCP, (metric) => sendToAnalytics(metric));
  }
}

export default reportWebVitals;
