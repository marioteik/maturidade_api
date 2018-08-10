import * as express from 'express';

import EntityCtrl from './controllers/entity';
import MartketCtrl from './controllers/market';

export default function setRoutes(app) {
    const router = express.Router();

    const handleHTTPMethods = (route: string[], ctrl: any) => {
        router.route(`/${route[1]}`).get(ctrl.getAll);
        router.route(`/${route[1]}/count`).get(ctrl.count);
        router.route(`/${route[0]}`).post(ctrl.insert);
        router.route(`/${route[0]}/:id`).get(ctrl.get);
        router.route(`/${route[0]}/:id`).put(ctrl.update);
        router.route(`/${route[0]}/:id`).delete(ctrl.delete);
    }

    // Entities
    handleHTTPMethods(['entity', 'entities'], new EntityCtrl());
    handleHTTPMethods(['market', 'markets'], new MartketCtrl());

    // Apply the routes to our application with the prefix /api
    app.use('/api', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        next();
    });
    app.use('/api', router);

}
