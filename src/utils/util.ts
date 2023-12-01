// import PermissionCore from "../../../LLSE-Modules/src/Permission/PermissionCore.js";

export function printError(err: Error) {
    logger.error(`捕获错误: ${err}\n${err.stack}`);
}
