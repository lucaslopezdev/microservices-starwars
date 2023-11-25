import { Router } from "express";
import store from "../database/index.js";
import validate from '../middlewares/index.js'

const router = Router()

router.get('/:model', validate.validateModel, async (req, res) => {
  const { model } = req.params
  const response = await store[model].list();
  res.status(200).json(response)
})

router.get('/:model/:id', validate.validateModel, async (req, res) => {
  const {model, id} = req.params;
  const response = await store[model].get(id)
  res.status(200).json(response)
})

router.post('/:model', validate.validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].insert(req.body)
  res.status(201).json(response)
})

export default router