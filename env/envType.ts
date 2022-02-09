export default interface envType {
  /**
   * Base url without suffix "/" (ex. http://example.com or http://example.com/directory)
   */
  BASE_URL: string

  /**
   * Root url with prefix "/" and without suffix "/" (ex. / or /directory)
   */
  ROOT_URL: string
}
