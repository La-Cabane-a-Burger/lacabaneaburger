const fs = require("fs")
const path = require("path")

fs.rmdirSync(path.resolve(__dirname, "../node_modules/.vite_opt_cache"), {
    recursive: true,
})

const useQueryPath = path.resolve(
    __dirname,
    "../../../node_modules/@vue/apollo-composable/dist/useQuery.d.ts"
)

fs.writeFileSync(
    useQueryPath,
    fs.readFileSync(useQueryPath, "utf8").replace(/^onServerPrefetch, /mu, "")
)
