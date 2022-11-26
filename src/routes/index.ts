import express, { Express, Request, Response, NextFunction } from 'express';

import { WorldCupService } from '../services/WorldCupService';

export default function routerApi(app: Express) {
  const router = express.Router();
  const service = new WorldCupService();

  app.use('/api/', router);

  router.get('/matches', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      message: 'initialMatches',
    });
  });

  router.get(
    '/groups',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await service
          .getGroupsKeys()
          .then((groups) => res.status(200).json(groups));
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    '/group/:key/teams',
    async (req: Request, res: Response, next: NextFunction) => {
      const { key } = req.params;
      try {
        await service.getGroupTeams(key).then((teams) =>
          res.status(200).json({
            teams,
          })
        );
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    '/group/:key/matches',
    async (req: Request, res: Response, next: NextFunction) => {
      const { key } = req.params;
      try {
        await service.getGroupMatches(key).then((matches) =>
          res.status(200).json({
            matches,
          })
        );
      } catch (error) {
        next(error);
      }
    }
  );
}
