import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepository } from "../repositories/answer-repository";
import { Answer } from "../entities/answer";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);
  const content = "Nova resposta";

  const answer = await answerQuestion.execute({
    content,
    instructorId: "1",
    questionId: "1",
  });

  expect(answer.content).toBe(content);
});
