const checkIsNavigationSupported = () => {
  return Boolean(document.startViewTransition)
}

const fetchPage = async url => {
  const response = await fetch(url)
  const text = await response.text()
  const modifiedHtml = text.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ''
  )

  const [, data] = modifiedHtml.match(/<body>([\s\S]*?)<\/body>/i) ?? []

  return data
}

export const startViewTransition = () => {
  if (!checkIsNavigationSupported()) return

  window.navigation.addEventListener('navigate', event => {
    const toUrl = new URL(event.destination.url)

    if (location.origin !== toUrl.origin) return

    event.intercept({
      async handler() {
        const data = await fetchPage(toUrl.pathname)

        // utilizar la api de View Transition API
        document.startViewTransition(() => {
          // el scroll hacia arriba del todo
          document.body.innerHTML = data
          document.documentElement.scrollTop = 0
        })
      }
    })
  })
}
