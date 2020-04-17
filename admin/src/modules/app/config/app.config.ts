const prefix = 'REACT_APP_'

const extractEnv = (key: string): string | undefined =>
  process.env[`${prefix}${key}`]

export const config = {
  app: {
    name: extractEnv('APP_NAME') || "App",
    theme: {
      pallete: {
        primary: extractEnv('APP_THEME_PALLETE_PRIMARY') || 'lightBlue',
        secondary: extractEnv('APP_THEME_PALLETE_SECONDARY') || 'lightBlue',
      }
    }
  },
  graphql: {
    uri: extractEnv('GRAPHQL_URI') || `http://localhost:8080/graphql`
  },
}