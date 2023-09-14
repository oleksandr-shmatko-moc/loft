import { DateTime } from 'luxon';
export const redisKeyRegex = /^[a-zA-Z0-9:_\.-]*$/;
export function getTimestamp() {
    return DateTime.local().toUTC().toSeconds();
}
export function sanitizeAndValidateRedisKey(key) {
    // Regular expression to test key
    // This expression will allow alphanumeric characters (a-z, A-Z, 0-9) and the specified symbols (: . - _)
    const sanitizedKey = key.replace(/[\n\r\t\b]/g, '');
    if (redisKeyRegex.test(key)) {
        return sanitizedKey;
    }
    else {
        throw new Error('Invalid Redis key. Allowed only alphanumeric characters (a-z, A-Z, 0-9) and the specified symbols (: . - _)`');
    }
}
export function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 !== 'object' ||
        obj1 === null ||
        typeof obj2 !== 'object' ||
        obj2 === null) {
        return false;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
export async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export function isNotUndefined(value) {
    return value !== undefined;
}
// A function to get the content of a choice by index
export function getContentOfChoiceByIndex(ctx, index = 0) {
    return ctx.llmResponse?.candidates[index].content;
}
// A function to modify the content of a choice by index
export function modifyContentOfChoiceByIndex(ctx, index, newContent) {
    const choiceMessage = ctx.llmResponse?.candidates[index];
    if (choiceMessage) {
        choiceMessage.content = newContent;
    }
}
//# sourceMappingURL=helpers.js.map