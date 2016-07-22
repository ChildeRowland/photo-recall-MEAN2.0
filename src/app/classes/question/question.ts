export class Question {
	constructor(
		public question: string,
		public answers: string,
		public hint?: string,
		public order?: number) {
	}
}
