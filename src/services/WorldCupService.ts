import { MatchData, Group } from '../interfaces/index';
import { initialMatchesData } from '../mockupData/matchesData';

const initialGroupKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export class WorldCupService {
  groups: Group[];
  groupKeys: string[];
  // matches: MatchData[];

  constructor() {
    this.groupKeys = initialGroupKeys;
    this.groups = this.generateGroups();
    // this.matches = initialMatchesData;
  }

  private generateGroups() {
    const groupsSet = [
      {
        groupName: 'A',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
      {
        groupName: 'B',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
      {
        groupName: 'C',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
      {
        groupName: 'D',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
      {
        groupName: 'E',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
      {
        groupName: 'F',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
      {
        groupName: 'G',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
      {
        groupName: 'H',
        teams: new Set<string>(),
        matches: new Array<MatchData>(),
      },
    ];
    const createIndex = (letter: string) => letter.charCodeAt(0) - 65;
    initialMatchesData.forEach((match) => {
      if (match.group) {
        const index = createIndex(
          match.group.charAt(match.group.length - 1).toUpperCase()
        );
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

  private findGroupIndex(key: string) {
    const index = this.groupKeys.findIndex(
      (group) => group.toLowerCase() === key.toLowerCase()
    );
    return index;
  }

  async getAllMatches() {
    // return this.matches;
  }

  async getTilRoundNumber(roundLimit: number) {}

  async getGroupTeams(key: string) {
    const index = this.findGroupIndex(key);
    if (index >= 0) return this.groups[index].teams;
    return [];
  }

  async getGroupMatches(key: string) {
    const index = this.findGroupIndex(key);
    if (index >= 0) return this.groups[index].matches;
    return [];
  }

  async getGroupsKeys() {
    return this.groupKeys;
  }
}
