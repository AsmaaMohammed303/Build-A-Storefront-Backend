"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers = __importStar(require("../../controllers/products.controllers"));
const authentcation_middleware_1 = __importDefault(require("../../middleware/authentcation.middleware"));
const routes = (0, express_1.Router)();
// / ===> api/products
routes
    .route('/')
    .get(authentcation_middleware_1.default, controllers.getAllproducts)
    .post(controllers.createproduct)
    .delete(authentcation_middleware_1.default, controllers.deleteAllproducts);
routes
    .route('/getSpecificproduct/:id')
    .get(authentcation_middleware_1.default, controllers.getSpecificproduct);
routes
    .route('/:id')
    .patch(authentcation_middleware_1.default, controllers.updateproduct);
routes
    .route('/deleteSpecificproduct/:id')
    .delete(authentcation_middleware_1.default, controllers.deleteproduct);
/*
routes
  .route('/')
  .get(controllers.getAllproducts)
  .post(authenticationMiddlware, controllers.createproduct);
routes
  .route('/:id')
  .get(controllers.getSpecificproduct)
  .patch(authenticationMiddlware, controllers.updateproduct)
  .delete(authenticationMiddlware, controllers.deleteproduct);
*/
//routes.route('/authenticate').post(controllers.authenticate);
//routes.post('/',controllers.create);
exports.default = routes;
