import axios from 'axios';

export interface IpLookupResult {
  country: string;
  countryCode: string;
  timezone: string;
}


const API_URL = import.meta.env.VITE_IP_LOOKUP_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;


export async function lookupIp(ip: string): Promise<IpLookupResult> {
  const response = await axios.get(`${API_URL}?apiKey=${API_KEY}&ipAddress=${ip}`);
  
  if (response.data.status === 'fail') {
    throw new Error(response.data.message || 'Failed to lookup IP address');
  }

  return {
    country: response.data.location.country,
    countryCode: response.data.location.country,
    timezone: response.data.location.timezone,
  };
} 