function copyServerIP() {
  navigator.clipboard.writeText("ellan.top").then(() => {
    alert("服务器IP已复制！");
  });
}

async function fetchServerStatus() {
  try {
    const res = await fetch("https://api.mcsrvstat.us/2/ellan.top");
    const data = await res.json();

    const icon = document.getElementById("server-icon");
    const motd = document.getElementById("server-motd");
    const version = document.getElementById("server-version");
    const players = document.getElementById("server-players");
    const ping = document.getElementById("server-ping");

    if (data.online) {
      motd.innerText = data.motd.clean ? data.motd.clean.join('\n') : "（无MOTD）";
      version.innerText = `版本：${data.version || '未知'}`;
      players.innerText = `人数：${data.players.online} / ${data.players.max}`;
      ping.innerText = data.debug && data.debug.ping ? `延迟：${Math.round(data.debug.ping)}ms` : '';

      if (data.icon) {
        icon.src = data.icon;
      } else {
        icon.src = "https://mc-heads.net/avatar/Notch"; // 备用图标
      }
    } else {
      motd.innerText = "服务器离线";
      version.innerText = "";
      players.innerText = "";
      ping.innerText = "";
      icon.src = "https://mc-heads.net/avatar/Sad"; // 离线状态图标
    }
  } catch (err) {
    document.getElementById("server-motd").innerText = "Rate limit reached ";
  }
}

function showDownloadOptions() {
    document.getElementById("client-download-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("client-download-popup").style.display = "none";
}


fetchServerStatus();
setInterval(fetchServerStatus, 30000); // 每 30 秒刷新
