import { format } from 'date-fns'

export const now = () => format(Date.now(), 'yyyy-MM-dd HH:mm:ss')
