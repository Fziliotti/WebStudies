var winston = require('winston');

var logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/payfast.log",
            maxsize: 1048576,
            maxFiles: 10,
            colorize: false,
        })
    ]
});

logger.log('info', 'Log forçando o nível info via parâmetro na função log().');
logger.info('Log forçando o nível info via invocação direta função info()');