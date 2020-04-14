import { Request,Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'will@mail',
    password: '123456',
    techs: ['node.js','react.js']
  });


  return response.json({message: 'hello world'}); 
}