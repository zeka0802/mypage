// 👁️ 비밀번호 보기/숨기기
function togglePassword(id, iconId) {
  const input = document.getElementById(id);
  const icon = document.getElementById(iconId);
  icon.addEventListener("click", () => {
    const type = input.type === "password" ? "text" : "password";
    input.type = type;
    icon.textContent = type === "password" ? "👁️" : "🙈";
  });
}
togglePassword("password", "togglePassword");
togglePassword("confirmPassword", "toggleConfirm");

// 🔐 비밀번호 유효성 검사
document.getElementById("password").addEventListener("input", function () {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!regex.test(this.value)) {
    this.setCustomValidity("비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.");
  } else {
    this.setCustomValidity("");
  }
});

// 🔁 비밀번호 일치 확인
document.getElementById("confirmPassword").addEventListener("input", function () {
  const pw = document.getElementById("password").value;
  if (this.value !== pw) {
    this.setCustomValidity("비밀번호가 일치하지 않습니다.");
  } else {
    this.setCustomValidity("");
  }
});

// 🔍 닉네임 중복 확인 (모의 처리)
document.getElementById("checkNickname").addEventListener("click", function () {
  const nickname = document.getElementById("nickname").value;
  if (nickname === "admin") {
    alert("이미 사용 중인 닉네임입니다.");
  } else {
    alert("사용 가능한 닉네임입니다.");
  }
});

// 📍 주소 검색 API
function searchAddress() {
  new daum.Postcode({
    oncomplete: function (data) {
      document.getElementById("address").value = data.address;
    }
  }).open();
}

// ✅ 전체 약관 동의
document.getElementById("agreeAll").addEventListener("change", function () {
  const checked = this.checked;
  document.querySelectorAll(".term").forEach(cb => cb.checked = checked);
});

// 🚀 폼 제출
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const requiredTerms = document.querySelectorAll(".term.required");
  const allAgreed = Array.from(requiredTerms).every(cb => cb.checked);

  if (!allAgreed) {
    alert("필수 약관에 모두 동의해주세요.");
    return;
  }

  alert("회원가입이 완료되었습니다!");
});
