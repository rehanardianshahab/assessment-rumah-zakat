/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_URL: string;
    NEXT_PUBLIC_JIKAN_URL: string;
    NEXT_PUBLIC_OMDB_URL: string;
    NEXT_PUBLIC_OMDB_KEY: string;
  }
}
