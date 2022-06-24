import { useCallback } from 'react'

export const useMessage = () => {
  return useCallback((text: string | null, isError: boolean) => {
    if (text) {
      alert(`${isError ? 'Ошибка:' : ''} ${text}`)
    }
  }, [])
}
