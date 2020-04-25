"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
const bcrypt_1 = require("bcrypt");
const config_main_1 = __importDefault(require("../config/config.main"));
const pepperify = (str) => crypto
    .createHmac('sha1', config_main_1.default.auth.pepper)
    .update(str)
    .digest('hex');
exports.hashString = async (plainText) => await bcrypt_1.hash(pepperify(plainText), config_main_1.default.auth.saltRounds);
exports.compareHashed = async (plainText, cipherText) => await bcrypt_1.compare(pepperify(plainText), cipherText);
//# sourceMappingURL=bcrypt.helpers.js.map