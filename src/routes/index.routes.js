import { Router } from 'express'

const router = Router()

router.get('/', (req, response) => {
    response.render('index')
})
router.get('/registro', (req, response) => {
    response.render('registro')
})
router.get('/compras', (req, response) => {
    response.render('compras')
})
router.get('/cuenta', (req, response) => {
    response.render('cuenta')
})
router.get('/pago', (req, response) => {
    response.render('pago')
})
export default router;