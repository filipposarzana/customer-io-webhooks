import { format } from 'date-fns'

export const today = () => format(Date.now(), 'yyyy-MM-dd')
