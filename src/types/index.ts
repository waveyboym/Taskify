export interface userType{
    key: string;
    name: string;
    role: string;
    status: string;
}

export enum OSTYPE{
    null = "null",
    aix = "aix",
    darwin = "darwin",
    freebsd = "freebsd",
    linux = "linux",
    openbsd = "openbsd",
    sunos = "sunos",
    win32 = "win32",
    android = "android"
}