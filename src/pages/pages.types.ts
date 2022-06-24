import { Dispatch, SetStateAction } from 'react'

export interface IPageProps {
  title?: string
  updateTitle?: Dispatch<SetStateAction<string | null>>
}
