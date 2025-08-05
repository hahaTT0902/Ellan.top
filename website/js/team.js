document.addEventListener("DOMContentLoaded", function () {
	const memberInfo = {
		Galahad: "艾尔岚的创始者与主策划之一，热爱MC，努力维护服务器，维持玩家优良体验。",
		hahaTT: "有着奇思妙想的创造者，努力创造不同寻常的解决方案",
		Jelly_Bubble: "拥有一颗温柔的创造心，负责提供优质的解决方案。",
	};

	// 绑定点击事件
	document.querySelectorAll(".member").forEach(function (member) {
		member.addEventListener("click", function () {
			const name = this.querySelector("p").textContent.trim();
			showPopup(name);
		});
	});

	// 显示弹窗
	function showPopup(name) {
		const popup = document.getElementById("popup");
		const popupName = document.getElementById("popup-name");
		const popupText = document.getElementById("popup-text");

		popupName.textContent = name;
		popupText.textContent = memberInfo[name] || "暂无资料。";
		popup.classList.remove("hidden");
	}

	// 关闭弹窗
	document.querySelector(".popup .close").addEventListener("click", function () {
		document.getElementById("popup").classList.add("hidden");
	});
});
