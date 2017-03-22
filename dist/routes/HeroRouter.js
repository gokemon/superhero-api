"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Heroes = require('../data');
class HeroRouter {
    /* Initialize the HeroRouter  */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /* GET all Heroes  */
    getAll(req, res, next) {
        res.send(Heroes);
    }
    /* Attach each handler to a router endpoints  */
    init() {
        this.router.get('/', this.getAll);
    }
} // end class
exports.HeroRouter = HeroRouter;
/* Create and export the configured router   */
const heroRoutes = new HeroRouter();
heroRoutes.init();
exports.default = heroRoutes.router;
