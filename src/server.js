import express from 'express'

//internal dependencies
import {clientVersionMiddleware} from './client'
import localAssetServer from './modules/local-asset-server'

const ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 2000

const app = express()
app.use(clientVersionMiddleware)

if (process.env.NODE_ENV !== 'production') {
    app.get('/assets/*',localAssetServer);
}

app.set('port',PORT)
app.listen(app.get('port'),() => {
    console.info(`Server is listening on ${app.get('port')}`)
})

export default app