export interface Command {
	name: string;
	description: string;
	help(): string;
}
