import { Categoria } from './Categoria';
export class Produto {
    constructor(
        public id:number,
        public nome:string,
        public imagem:string,
        public preco:string,
        public categoria:Categoria,
    ) {}
}