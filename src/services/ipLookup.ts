import axios from 'axios';

export interface IpLookupResult {
  country: string;
  countryCode: string;
  timezone: string;
}


const API_URL = import.meta.env.VITE_IP_LOOKUP_API_URL;

export async function lookupIp(ip: string): Promise<IpLookupResult> {
  const response = await axios.get(`${API_URL}/${ip}/json/`);
  
  if (response.data.error) {
    throw new Error(response.data.reason || 'Failed to lookup IP address');
  }

  return {
    country: response.data.country_name,
    countryCode: response.data.country_code,
    timezone: response.data.timezone,
  };
} 