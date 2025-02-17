declare module 'js-encrypt' {
  export class JSEncrypt {
    constructor();
    setPublicKey(publicKey: string): void;
    setPrivateKey(privateKey: string): void;
    encrypt(data: string): string | false;
    decrypt(data: string): string | false;
  }
  export = JSEncrypt;
}
