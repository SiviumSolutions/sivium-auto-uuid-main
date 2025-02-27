"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluginId_1 = __importDefault(require("../admin/src/pluginId"));
exports.default = ({ strapi }) => {
    strapi.customFields.register({
        name: 'uuid',
        plugin: pluginId_1.default,
        type: 'uid',
    });
};
