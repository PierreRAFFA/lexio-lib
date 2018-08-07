import { IGame, IRanking, LexioRequest } from "../index";
/**
 *
 * @param {LexioRequest | undefined} req
 * @param {IGame} game
 * @returns {Promise<IGame>}
 */
export declare function postGame(req: LexioRequest | undefined, game: IGame): Promise<IGame>;
/**
 *
 * @param {LexioRequest | undefined} req
 * @param {IGame} game
 * @returns {Promise<IGame>}
 */
export declare function getRanking(req: LexioRequest | undefined, language: string, rankingReference: string): Promise<IRanking>;
