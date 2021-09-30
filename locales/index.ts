import merge from "deepmerge"

import pages from "./pages"
import topPage from "./topPage"
import downloadPage from "./downloadPage"

export default merge.all([pages, topPage, downloadPage])
