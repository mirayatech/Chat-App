import dayjs from 'dayjs'
import kebabCase from 'lodash.kebabcase'

export const formatFileName = (name: string) => {
  const splitted = name.split('.')

  const extension = splitted.slice(-1)[0]
  const baseName = splitted.slice(0, -1).join('.')

  return `${Date.now()}-${kebabCase(
    baseName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
  )}.${extension}`
}

// https://gist.github.com/zentala/1e6f72438796d74531803cc3833c039c
export const formatFileSize = (size: number) => {
  const i = Math.floor(Math.log(size) / Math.log(1024))

  return `${(size / Math.pow(1024, i)).toFixed(1)} ${
    ['B', 'KB', 'MB', 'GB', 'TB'][i]
  }`
}

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp)
  const formatter = dayjs(date)
  const now = new Date()

  if (dayjs().isSame(formatter, 'date')) return formatter.format('h:mm A')

  if (dayjs().isSame(formatter, 'week')) return formatter.format('ddd h:mm A')

  if (now.getFullYear() === date.getFullYear())
    return formatter.format('MMM DD h:mm A')

  return formatter.format('DD MMM YYYY h:mm A')
}