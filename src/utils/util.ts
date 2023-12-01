export function printError(err: Error) {
    logger.error(`捕获错误: ${err}\n${err.stack}`);
}
