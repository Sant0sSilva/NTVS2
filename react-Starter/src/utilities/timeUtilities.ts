export const generateTimes = (interval: number) => {
  const times: string[] = [];
  for (let hour = 16; hour < 23; hour++) {
    for (let minutes = 0; minutes < 60; minutes += interval) {
      const h = String(hour).padStart(2, "0");
      const m = String(minutes).padStart(2, "0");
      times.push(`${h}:${m}`);
    }
  }
  return times;
};
