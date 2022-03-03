import { parseISO } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}></time> //format does not work. date object cannot read.
    //return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}