export interface IJWTPayload {
    email: string;
    id: string;
}

export interface IJWTRepository {
    generate(payload: IJWTPayload): string;
    verify(key: string): IJWTPayload;
}