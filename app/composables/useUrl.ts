export const useUrl = () => {
  const meta = useMeta()

  const getUrl = (path: string = '') => {
    return path ? `${meta.url}${path.startsWith('/') ? path : `/${path}`}` : meta.url
  }

  return { getUrl }
}
