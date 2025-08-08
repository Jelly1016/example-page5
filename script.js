const form = document.getElementById('questionForm');
const resultDiv = document.getElementById('result');
const LOCAL_KEY = 'user-choice5';
const REFRESH_KEY = 'refresh-count';

// 记录刷新次数
let refreshCount = parseInt(localStorage.getItem(REFRESH_KEY) || '0', 10);
refreshCount++;
localStorage.setItem(REFRESH_KEY, refreshCount);

// 超过 10 次则清空记录
if (refreshCount > 10) {
  localStorage.removeItem(LOCAL_KEY);
  localStorage.setItem(REFRESH_KEY, '1'); // 重新计数
}

// 如果已经提交过，显示结果
const savedChoice = localStorage.getItem(LOCAL_KEY);
if (savedChoice) {
  form.classList.add('hidden');
  resultDiv.textContent = `去看看阳台吧`;
  resultDiv.classList.remove('hidden');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const choice = form.elements['choice'].value;
  if (!choice) return;

  localStorage.setItem(LOCAL_KEY, choice);
  form.classList.add('hidden');
  resultDiv.textContent = `去看看阳台吧`;
  resultDiv.classList.remove('hidden');
});

