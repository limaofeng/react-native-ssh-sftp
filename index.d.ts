declare module 'react-native-ssh-sftp' {
  type Callback = (error: string | any, output: string) => void;
  export type Handler = (output: string) => void;
  export type PtyType = 'vanilla' | 'vt100' | 'vt102' | 'vt220' | 'ansi' | 'xterm';
  export type Event = 'Shell';
  class SSHClient {
    constructor(
      address: string,
      port: number,
      username: string,
      credential: string | { privateKey?: string; publicKey?: string },
      callback?: Callback
    );
    startShell: (ptyType: PtyType, callback: Callback) => void;
    writeToShell: (command: string, callback: Callback) => void;
    on: (event: Event, handler: Handler) => void;
    closeShell: () => void;
    connect: (callback: Callback) => void;
    execute: (command: string, callback: Callback) => void;
  }

  export default SSHClient;
}
