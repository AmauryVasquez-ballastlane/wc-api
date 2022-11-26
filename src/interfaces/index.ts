export interface Group {
  name: string;
  teams: string[];
  matches: MatchData[];
}

export interface MatchData {
  matchNumber: number;
  roundNumber: number;
  dateUtc: string;
  location: string;
  homeTeam: string;
  awayTeam: string;
  group: string | null;
  homeTeamScore: number | null;
  awayTeamScore: number | null;
}
