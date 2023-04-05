import type { Request, Response } from 'express';

const city = require('./geographic/city.json');

function getCity(req: Request, res: Response) {
  return res.json({
    data: city[req.params.province],
  });
}

export default {
  // 支持值为 Object 和 Array
  'GET  /api/geographic/city/:province': getCity,
};
