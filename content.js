chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated')
      if (document.location.href.startsWith("https://csgoempire.com/roulette") || document.location.href.startsWith("https://csgoempire.com/cases") || document.location.href.startsWith("https://csgoempire.com/coinflip") || document.location.href.startsWith("https://csgoempire.com/match-betting"))
        document.location.href = "https://csgoempire.com/profile/cases";
})