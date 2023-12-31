export const errorUtils = {
  logError: (message: string, { error }: { error: string }): void => {
    //eslint-disable-next-line no-console
    console.error(message, error)
  },
  getErrorMessage: (error: unknown) => {
    if (error instanceof Error) return error.message
    return String(error)
  },
}
