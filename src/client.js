import path from 'path'

const CLIENT_VERSION = process.env.CLIENT_VERSION

export const clientVersionMiddleware = (req,res, next) => {
    res.locals.clientFolders = getClientFolders()
    console.log(res.locals.clientFolders)
}

export const getClientFolders = () => {
    const CLIENT_FOLDER = path.resolve(__dirname,'..','..','client','build',CLIENT_VERSION)
    const SERVER_FOLDER = path.join(CLIENT_FOLDER,'server')
    console.log(CLIENT_FOLDER,SERVER_FOLDER)
    return {
        CLIENT_FOLDER,
        SERVER_FOLDER
    }
}

