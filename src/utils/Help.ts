import { Command } from './Command';

export class Help implements Command {
	name = "help";
	description = "Lists available commands";
	help(): string {
		return "'help' lists all available commands, you can use 'help' as the first argument of any command to get more information on how to use it.";
	}
}
