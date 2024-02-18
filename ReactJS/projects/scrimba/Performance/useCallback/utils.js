//causa um atraso na resposta

export function sleep(ms) {
  const wakeUpTime = Date.now() + ms
  while (Date.now() < wakeUpTime) {}
}
