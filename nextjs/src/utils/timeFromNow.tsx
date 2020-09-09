import dayjs, { Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const timeFromNow = (time: string): string => {
  return dayjs(time).fromNow()
}
