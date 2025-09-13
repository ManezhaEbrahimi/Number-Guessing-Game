// تولید یک عدد تصادفی بین 1 تا 100
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0; // شمارش تعداد تلاش‌ها

    // تابع بررسی حدس کاربر
    function checkGuess() {
      const guessInput = document.getElementById("guess");
      const message = document.getElementById("message");
      const guess = Number(guessInput.value);

      // اگر کاربر عدد وارد نکرده باشد
      if (!guess) {
        message.textContent = "⚠️ Please enter a number!";
        message.style.color = "yellow";
        return;
      }

      attempts++; // هر بار که کاربر حدس می‌زند، تلاش اضافه می‌شود

      // بررسی حدس درست
      if (guess === secretNumber) {
        message.textContent = `🎉 Correct! You found it in ${attempts} tries!`;
        message.style.color = "lime";
      }
      // اگر عدد کوچک‌تر باشد
      else if (guess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "orange";
      }
      // اگر عدد بزرگ‌تر باشد
      else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "orange";
      }
    }

    // تابع برای شروع دوباره بازی
    function resetGame() {
      secretNumber = Math.floor(Math.random() * 100) + 1; // تولید عدد جدید
      attempts = 0; // صفر کردن تلاش‌ها
      document.getElementById("guess").value = "";
      document.getElementById("message").textContent = "🔄 Game restarted! Guess a new number.";
      document.getElementById("message").style.color = "white";
    }