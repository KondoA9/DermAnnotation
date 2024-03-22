import merge from "deepmerge"

import pages from "./pages"
import topPage from "./topPage"
import downloadPage from "./downloadPage"
import manualPage from "./manualPage"
import devPage from "./devPage"

export default merge.all([pages, topPage, downloadPage, manualPage, devPage])
