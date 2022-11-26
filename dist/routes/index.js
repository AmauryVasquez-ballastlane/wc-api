"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WorldCupService_1 = require("../services/WorldCupService");
function routerApi(app) {
    const router = express_1.default.Router();
    const service = new WorldCupService_1.WorldCupService();
    app.use('/api/', router);
    router.get('/matches', (req, res, next) => {
        res.status(200).json({
            message: 'initialMatches',
        });
    });
    router.get('/groups', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield service
                .getGroupsKeys()
                .then((groups) => res.status(200).json(groups));
        }
        catch (error) {
            next(error);
        }
    }));
    router.get('/group/:key/teams', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const { key } = req.params;
        try {
            yield service.getGroupTeams(key).then((teams) => res.status(200).json({
                teams,
            }));
        }
        catch (error) {
            next(error);
        }
    }));
    router.get('/group/:key/matches', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const { key } = req.params;
        try {
            yield service.getGroupMatches(key).then((matches) => res.status(200).json({
                matches,
            }));
        }
        catch (error) {
            next(error);
        }
    }));
}
exports.default = routerApi;
//# sourceMappingURL=index.js.map