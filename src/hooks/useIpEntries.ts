import { useState } from "react"
import { useQueries } from "@tanstack/react-query"
import { lookupIp } from "@/services/ipLookup"
import { useDebouncedCallback } from "use-debounce"

interface IpEntryInput {
  id: string
  ip: string
}

export interface IpEntry extends IpEntryInput {
  countryCode: string
  timezone: string
  isLoading: boolean
  error?: string
}

export function useIpEntries() {
  const [entries, setEntries] = useState<IpEntryInput[]>([])

  const queries = useQueries({
    queries: entries.map(entry => ({
      queryKey: ['ip-lookup', entry.ip] as const,
      queryFn: () => {return lookupIp(entry.ip)},
      enabled: Boolean(entry.ip),
      staleTime: 5 * 60 * 1000, 
      retry: 1,
    }))
  })

  const handleAddEntry = () => {
    const newId = crypto.randomUUID()
    setEntries([...entries, { id: newId, ip: "" }])
  }

  const handleIpChange = useDebouncedCallback((id: string, value: string) => {
    setEntries(entries.map(entry =>
      entry.id === id ? { ...entry, ip: value } : entry
    ))
  }, 1000)


  const enrichedEntries: IpEntry[] = entries.map((entry, index) => {
    const query = queries[index]
    return {
      ...entry,
      countryCode: query.data?.countryCode ?? "",
      timezone: query.data?.timezone ?? "",
      isLoading: query.isLoading || query.isFetching,
      error: query.error ? (query.error as Error).message : undefined
    }
  })

  return {
    entries: enrichedEntries,
    handleAddEntry,
    handleIpChange,
  }
} 