import { Router } from 'express';
import User from './models/user';
import Benefit from './models/benefit';

const router = Router();

router.get('/user/:id', function(req, res){
    const user; //db 연동
    return user;
});

router.get('/benefit/:id', function(req, res){
    const benefit; //db 연동
    return benefit;
});

router.post('/', function(req, res){

});

export default router;