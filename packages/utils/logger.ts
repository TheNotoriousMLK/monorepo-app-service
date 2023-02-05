import log from 'loglevel'

const logger = log.getLogger('default')

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  logger.enableAll()
}

export { logger }
