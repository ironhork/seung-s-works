
const { Anthropic } = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: 'YOUR_KEY', // 여기에 실제 API 키를 입력하세요.
});

const user_prompt = process.argv[2];

if (!user_prompt) {
  console.log("사용법: node claude-cli.js \"질문 내용\"");
  process.exit(1);
}

async function main() {
  try {
    const message = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [{ role: "user", content: user_prompt }],
    });

    console.log(message.content[0].text);
  } catch (err) {
    console.error("Claude AI와 통신하는 중 오류가 발생했습니다:", err.message);
  }
}

main();
