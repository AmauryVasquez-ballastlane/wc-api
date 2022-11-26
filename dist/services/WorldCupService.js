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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldCupService = void 0;
const matchesData_1 = require("../mockupData/matchesData");
const initialGroupKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
class WorldCupService {
    // matches: MatchData[];
    constructor() {
        this.groupKeys = initialGroupKeys;
        this.groups = this.generateGroups();
        // this.matches = initialMatchesData;
    }
    generateGroups() {
        const groupsSet = [
            {
                groupName: 'A',
                teams: new Set(),
                matches: new Array(),
            },
            {
                groupName: 'B',
                teams: new Set(),
                matches: new Array(),
            },
            {
                groupName: 'C',
                teams: new Set(),
                matches: new Array(),
            },
            {
                groupName: 'D',
                teams: new Set(),
                matches: new Array(),
            },
            {
                groupName: 'E',
                teams: new Set(),
                matches: new Array(),
            },
            {
                groupName: 'F',
                teams: new Set(),
                matches: new Array(),
            },
            {
                groupName: 'G',
                teams: new Set(),
                matches: new Array(),
            },
            {
                groupName: 'H',
                teams: new Set(),
                matches: new Array(),
            },
        ];
        const createIndex = (letter) => letter.charCodeAt(0) - 65;
        matchesData_1.initialMatchesData.forEach((match) => {
            if (match.group) {
                const index = createIndex(match.group.charAt(match.group.length - 1).toUpperCase());
                groupsSet[index].teams.add(match.awayTeam.toLowerCase());
                groupsSet[index].teams.add(match.homeTeam.toLowerCase());
                groupsSet[index].matches.push(match);
            }
        });
        const groups = groupsSet.map((groupInfo) => {
            return {
                name: groupInfo.groupName,
                teams: Array.from(groupInfo.teams),
                matches: groupInfo.matches,
            };
        });
        return groups;
    }
    findGroupIndex(key) {
        const index = this.groupKeys.findIndex((group) => group.toLowerCase() === key.toLowerCase());
        return index;
    }
    getAllMatches() {
        return __awaiter(this, void 0, void 0, function* () {
            // return this.matches;
        });
    }
    getTilRoundNumber(roundLimit) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getGroupTeams(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.findGroupIndex(key);
            if (index >= 0)
                return this.groups[index].teams;
            return [];
        });
    }
    getGroupMatches(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.findGroupIndex(key);
            if (index >= 0)
                return this.groups[index].matches;
            return [];
        });
    }
    getGroupsKeys() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.groupKeys;
        });
    }
}
exports.WorldCupService = WorldCupService;
//# sourceMappingURL=WorldCupService.js.map