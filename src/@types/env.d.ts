declare module 'process' {
	global {
		namespace NodeJS {
			interface ProcessEnv {
				readonly NODE_ENV?: string;
				readonly DB_NAME?: string;
			}
		}
	}
}