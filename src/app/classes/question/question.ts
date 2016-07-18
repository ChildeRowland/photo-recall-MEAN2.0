export class Question {
	constructor(
		public question: string,
		public answer: string,
		public hint?: string,
		public order?: number) {
	}
}
