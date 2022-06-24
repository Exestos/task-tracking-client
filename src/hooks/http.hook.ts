import axios from 'axios'
import { useState, useCallback } from 'react'

type Headers = {
  [key: string]: string
}

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  const request = useCallback(
    async (endpoint: string, method: string = 'GET', body: any = null, headers: Headers = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }
        const url = 'http://localhost:8000' + endpoint
        const response = await axios({
          method,
          url,
          data: body,
          headers
        });
        const data = response.data

        if (!response.data) {
          throw new Error(data.message ?? 'Что-то пошло не так')
        }

        setLoading(false)

        return data
      } catch (e: any) {
        setLoading(false)
        setError(e.message)
        throw e
      }
    },
    []
  )

  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }
}
