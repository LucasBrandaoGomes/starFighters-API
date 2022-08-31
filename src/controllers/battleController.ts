import { NextFunction, Request, Response } from "express";

export async function postBattle(req: Request,res: Response, next: NextFunction) {
  const firstUser: User = { name: req.body.firstUser, data: [] };
  const secondUser: User = { name: req.body.secondUser, data: [] };
  try {
    firstUser.data = await userService.findOneInGitByName(firstUser.name);
    secondUser.data = await userService.findOneInGitByName(secondUser.name);
    const result = await userService.compareUsersScores(firstUser, secondUser);
    return res.send(result);
  } catch (error) {
    return next(error);
  }
}