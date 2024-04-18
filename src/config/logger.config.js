const winston=require('winston');

const allowedtransport=[];
const logger=winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({
            timestamp:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log)=>`${log.timestamp} ${[log.level.toUpperCase()]} :${log.message}`)
    )
})


module.exports=logger;