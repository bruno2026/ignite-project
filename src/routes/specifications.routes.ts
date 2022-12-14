import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => CreateSpecificationController.handle(request, response));

export { specificationsRoutes };
