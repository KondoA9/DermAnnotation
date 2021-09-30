import envType from "./envType"

const environment = process.env.NODE_ENV

export default require(`./${environment}.ts`).env as envType
